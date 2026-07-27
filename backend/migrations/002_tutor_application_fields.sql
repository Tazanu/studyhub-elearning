-- Add tutor application fields
ALTER TABLE tutors
  ADD COLUMN IF NOT EXISTS status VARCHAR(20) NOT NULL DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS availability JSONB,
  ADD COLUMN IF NOT EXISTS proof_document_url VARCHAR(500),
  ADD COLUMN IF NOT EXISTS applied_at TIMESTAMPTZ DEFAULT NOW(),
  ADD COLUMN IF NOT EXISTS years_experience VARCHAR(20);

-- Migrate is_approved → status
UPDATE tutors SET status = CASE WHEN is_approved = true THEN 'approved' ELSE 'pending' END;

-- Migrate experience_years (int) → years_experience (string)
UPDATE tutors SET years_experience = experience_years::text WHERE experience_years IS NOT NULL;
