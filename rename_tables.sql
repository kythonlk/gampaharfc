-- Migration script to rename existing tables to gp_ prefix
-- Run this if you already have the tables in your database

BEGIN;

-- Rename tables
ALTER TABLE IF EXISTS news RENAME TO gp_news;
ALTER TABLE IF EXISTS events RENAME TO gp_events;
ALTER TABLE IF EXISTS fixtures RENAME TO gp_fixtures;
ALTER TABLE IF EXISTS players RENAME TO gp_players;
ALTER TABLE IF EXISTS gallery RENAME TO gp_gallery;
ALTER TABLE IF EXISTS sponsors RENAME TO gp_sponsors;
ALTER TABLE IF EXISTS memberships RENAME TO gp_memberships;
ALTER TABLE IF EXISTS medical_clearance_forms RENAME TO gp_medical_clearance_forms;
ALTER TABLE IF EXISTS generic_registrations RENAME TO gp_generic_registrations;

-- Policies are renamed automatically with the table, but the names might still refer to the old names.
-- It's better to drop and recreate them to match the new schema.

-- Drop old policies (adding gp_ suffix to avoid confusion)
-- Actually, the names in my gp_schema.sql are new.

COMMIT;
