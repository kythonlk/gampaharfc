-- Gampaha RFC Database Schema
-- All tables prefixed with gp_

-- 1. News
CREATE TABLE IF NOT EXISTS gp_news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  excerpt text,
  image_url text,
  author text NOT NULL,
  published_date timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- 2. Events
CREATE TABLE IF NOT EXISTS gp_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  event_date timestamptz NOT NULL,
  location text NOT NULL,
  image_url text,
  created_at timestamptz DEFAULT now()
);

-- 3. Fixtures
CREATE TABLE IF NOT EXISTS gp_fixtures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  home_team text NOT NULL,
  away_team text NOT NULL,
  match_date timestamptz NOT NULL,
  venue text NOT NULL,
  competition text NOT NULL,
  home_score integer,
  away_score integer,
  home_team_logo text,
  away_team_logo text,
  status text NOT NULL DEFAULT 'upcoming',
  created_at timestamptz DEFAULT now()
);

-- 4. Players
CREATE TABLE IF NOT EXISTS gp_players (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  position text NOT NULL,
  jersey_number integer,
  photo_url text,
  bio text,
  team text NOT NULL DEFAULT 'senior',
  created_at timestamptz DEFAULT now()
);

-- 5. Gallery
CREATE TABLE IF NOT EXISTS gp_gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  image_url text NOT NULL,
  caption text,
  category text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- 6. Sponsors
CREATE TABLE IF NOT EXISTS gp_sponsors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text NOT NULL,
  website_url text,
  tier text NOT NULL,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- 7. Memberships (Updated with full registration fields)
CREATE TABLE IF NOT EXISTS gp_memberships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  whatsapp text,
  membership_type text NOT NULL,
  emergency_contact text NOT NULL,
  emergency_phone text NOT NULL,
  dob date NOT NULL,
  playing_position text,
  secondary_position text,
  other_position text,
  address text,
  height text,
  weight text,
  emirates_id text NOT NULL,
  emirates_id_file text, -- Base64 encoded
  passport_number text NOT NULL,
  nationality text NOT NULL,
  passport_photo text, -- Base64 encoded
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- 8. Medical Clearance Forms
CREATE TABLE IF NOT EXISTS gp_medical_clearance_forms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  dob date NOT NULL,
  nationality text NOT NULL,
  passport_id text NOT NULL,
  contact_number text NOT NULL,
  emergency_contact text NOT NULL,
  has_insurance boolean NOT NULL,
  insurance_provider text,
  policy_number text,
  policy_expiry date,
  coverage_details text,
  uninsured_signature text,
  uninsured_date date,
  history_asthma boolean DEFAULT false,
  history_heart_conditions boolean DEFAULT false,
  history_allergies boolean DEFAULT false,
  history_diabetes boolean DEFAULT false,
  history_major_injuries boolean DEFAULT false,
  history_other boolean DEFAULT false,
  history_other_specify text,
  injury_details text,
  medication text,
  doctor_name text,
  clinic_name text,
  doctor_signature text,
  doctor_date date,
  player_signature text NOT NULL,
  declaration_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- 9. Generic Registrations (Event Submissions)
CREATE TABLE IF NOT EXISTS gp_generic_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES gp_events(id) ON DELETE CASCADE,
  submission_data jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Security Configuration (RLS)
ALTER TABLE gp_news ENABLE ROW LEVEL SECURITY;
ALTER TABLE gp_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE gp_fixtures ENABLE ROW LEVEL SECURITY;
ALTER TABLE gp_players ENABLE ROW LEVEL SECURITY;
ALTER TABLE gp_gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE gp_sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE gp_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE gp_medical_clearance_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE gp_generic_registrations ENABLE ROW LEVEL SECURITY;

-- Select Policies (Public access for most, Authenticated for sensitive)
CREATE POLICY "Anyone can view news" ON gp_news FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Anyone can view events" ON gp_events FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Anyone can view fixtures" ON gp_fixtures FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Anyone can view players" ON gp_players FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Anyone can view gallery" ON gp_gallery FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Anyone can view sponsors" ON gp_sponsors FOR SELECT TO anon, authenticated USING (true);

-- Submission Policies
CREATE POLICY "Anyone can submit membership" ON gp_memberships FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Anyone can submit medical form" ON gp_medical_clearance_forms FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Anyone can submit event registration" ON gp_generic_registrations FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Admin Access Policies (Authenticated users can do everything)
CREATE POLICY "Admins can manage news" ON gp_news FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins can manage events" ON gp_events FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins can manage fixtures" ON gp_fixtures FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins can manage players" ON gp_players FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins can manage gallery" ON gp_gallery FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins can manage sponsors" ON gp_sponsors FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins can manage memberships" ON gp_memberships FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins can manage medical forms" ON gp_medical_clearance_forms FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins can manage registrations" ON gp_generic_registrations FOR ALL TO authenticated USING (true);
