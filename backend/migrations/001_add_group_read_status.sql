-- Migration: Add group_read_status table for unread message counts
-- Run this SQL on your PostgreSQL database

CREATE TABLE IF NOT EXISTS "group_read_status" (
    "user_id" INTEGER NOT NULL,
    "group_id" INTEGER NOT NULL,
    "last_read_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT "group_read_status_pkey" PRIMARY KEY ("user_id", "group_id"),
    CONSTRAINT "group_read_status_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION,
    CONSTRAINT "group_read_status_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE NO ACTION
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS "idx_group_read_status_user" ON "group_read_status"("user_id");
CREATE INDEX IF NOT EXISTS "idx_group_read_status_group" ON "group_read_status"("group_id");

-- After running this migration, regenerate Prisma client:
-- cd backend
-- npx prisma generate
