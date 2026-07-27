# Q&A Forum System - Complete Implementation

## Overview
A professional Stack Overflow-inspired Q&A forum integrated into StudyHub with advanced features including voice answers, voting, bookmarks, and reputation system.

---

## Features Implemented

### Core Features
✅ **Ask Questions** - Students can post questions with title, description, subject, category, and tags
✅ **Answer Questions** - Provide detailed answers to help peers
✅ **Voice Recording** - Record audio explanations for both questions and answers
✅ **Image Attachments** - Upload up to 5 images per question/answer
✅ **Voting System** - Upvote/downvote questions and answers
✅ **Best Answer** - Question authors can accept the best answer
✅ **Bookmarks** - Save questions for later reference
✅ **Follow Questions** - Get notified of new answers
✅ **Search & Filter** - Find questions by keyword, category, or subject
✅ **Sorting** - Sort by recent, most voted, unanswered, or solved
✅ **Views Counter** - Track question popularity
✅ **Reputation System** - Earn points for participation
✅ **Rich Metadata** - Tags, categories, subjects for organization
✅ **Edit Tracking** - Mark edited questions/answers
✅ **Responsive Design** - Works on all devices

---

## Database Schema

### Enhanced Tables

#### `questions`
- `audio_url` - Voice recording URL
- `images[]` - Array of image URLs
- `category` - Question category
- `is_edited` - Edit tracking
- Indexes on subject, category, created_at, votes

#### `answers`
- `audio_url` - Voice answer URL
- `images[]` - Array of image URLs
- `is_edited` - Edit tracking

### New Tables

#### `question_votes`
- `user_id` + `question_id` (unique)
- `vote_type` (1 or -1)
- Tracks upvotes/downvotes on questions

#### `answer_votes`
- `user_id` + `answer_id` (unique)
- `vote_type` (1 or -1)
- Tracks upvotes/downvotes on answers

#### `question_bookmarks`
- `user_id` + `question_id` (unique)
- Saves questions for later

#### `question_followers`
- `user_id` + `question_id` (unique)
- Subscribe to question updates

#### `answer_comments`
- Quick comments on answers
- `answer_id`, `user_id`, `content`

---

## API Endpoints

### Questions
- `GET /api/qa` - List questions (with filters, search, pagination)
- `GET /api/qa/:id` - Get single question with answers
- `POST /api/qa` - Create question (supports audio + images)
- `PATCH /api/qa/:id` - Update question
- `DELETE /api/qa/:id` - Delete question
- `POST /api/qa/:id/vote` - Vote on question
- `POST /api/qa/:id/bookmark` - Bookmark/unbookmark
- `POST /api/qa/:id/follow` - Follow/unfollow question

### Answers
- `POST /api/qa/:id/answers` - Post answer (supports audio + images)
- `POST /api/qa/:id/answers/:answerId/accept` - Accept best answer
- `POST /api/qa/:questionId/answers/:answerId/vote` - Vote on answer
- `POST /api/qa/:questionId/answers/:answerId/comments` - Comment on answer

### Meta
- `GET /api/qa/user/bookmarks` - Get user's bookmarks
- `GET /api/qa/meta/categories` - Get all categories

---

## Reputation System

### Point Awards
- **Ask question**: +5 points
- **Post answer**: +10 points
- **Answer accepted**: +25 points
- **Question upvoted**: +10 points
- **Answer upvoted**: +10 points
- **Question downvoted**: -5 points
- **Answer downvoted**: -5 points
- **Vote removed**: Points reversed

---

## Frontend Pages

### 1. QAForum (`/qa`)
Main listing page with:
- Search bar with real-time filtering
- Category filter (Mathematics, Physics, Chemistry, etc.)
- Sort options (Recent, Most Voted, Unanswered, Solved)
- Question cards showing votes, answers, views, tags
- Pagination
- "Ask Question" button

### 2. AskQuestion (`/qa/ask`)
Question creation form with:
- Title input (required)
- Rich text description (required)
- Subject and category selectors
- Tags (comma-separated)
- Audio recording button (with live recording indicator)
- Image upload (max 5 images with preview)
- Submit/Cancel buttons

### 3. QuestionDetail (`/qa/:id`)
Full question view with:
- Question content with vote buttons (+/-)
- Audio player if voice recording exists
- Image gallery if images attached
- Tags display
- Bookmark and Follow buttons
- View count and author reputation
- All answers sorted (accepted first, then by votes)
- Answer form with text + voice recording
- Accept answer button (for question author)
- Vote buttons on each answer

---

## Key Features in Detail

### Voice Recording
- Uses Web Audio API (`MediaRecorder`)
- Records in WebM format
- Real-time recording indicator (pulsing red button)
- Playback preview before submission
- Delete and re-record option
- Audio player in question/answer display

### Voting System
- Upvote (+1) or Downvote (-1)
- Click again to remove vote
- Vote change updates in real-time
- Reputation updates automatically
- Visual feedback (green for upvote, red for downvote)

### Accepted Answer
- Only question author can accept
- Only one answer can be accepted per question
- Marks question as "Solved"
- Accepted answer shows first with green badge
- Awards 25 reputation points

### Categories
- Pre-defined: Mathematics, Physics, Chemistry, Biology, Computer Science, Engineering, Medicine, Business, Other
- Filterable on main page
- Helps organize questions by topic

---

## Usage Instructions

### For Students Asking Questions

1. Click "Ask Question" button
2. Write clear, specific title
3. Provide detailed description
4. Select subject and category
5. Add relevant tags
6. **Optional**: Record voice explanation
7. **Optional**: Upload diagrams/images
8. Submit

### For Students Answering

1. Browse questions by category/search
2. Open question detail page
3. Read question carefully (including audio if present)
4. Write detailed answer
5. **Optional**: Record voice explanation
6. Submit answer
7. **Earn reputation** for helping peers

### For Question Authors

1. Review answers as they come in
2. Upvote helpful answers
3. **Accept the best answer** when satisfied
4. Follow up if clarification needed

---

## Technical Implementation

### Backend Tech
- **Node.js + Express** - REST API
- **Prisma ORM** - Database management
- **PostgreSQL** - Data storage
- **Multer** - File/audio upload handling
- **JWT** - Authentication

### Frontend Tech
- **React** - UI framework
- **Framer Motion** - Animations
- **Lucide Icons** - Icon library
- **MediaRecorder API** - Voice recording
- **Sonner** - Toast notifications

### File Uploads
- Audio: Stored in `/uploads` directory
- Images: Stored in `/uploads` directory
- Served statically via Express

---

## Future Enhancements (Optional)

- [ ] Answer comments threading
- [ ] Question edit history
- [ ] Duplicate question detection
- [ ] Advanced search filters
- [ ] Leaderboard for top contributors
- [ ] Badges/achievements
- [ ] Email notifications for followers
- [ ] Code syntax highlighting
- [ ] LaTeX math equations support
- [ ] Question templates by subject

---

## Testing the System

### Manual Test Flow

1. **Create Account** → Login
2. **Ask Question** 
   - Navigate to Q&A Forum
   - Click "Ask Question"
   - Fill form + record voice (optional)
   - Submit
3. **Browse Questions**
   - Use search
   - Filter by category
   - Sort by different criteria
4. **Answer Question**
   - Open any question
   - Write answer + record voice (optional)
   - Submit
5. **Vote & Interact**
   - Upvote/downvote questions and answers
   - Bookmark interesting questions
   - Follow questions for updates
6. **Accept Answer** (as question author)
   - Review answers
   - Click accept button on best answer

### Backend Validation
```bash
# Start backend (if not running)
cd backend
npm start

# Test endpoints with curl
curl http://localhost:5000/api/qa
curl http://localhost:5000/api/qa/1
```

### Database Verification
```sql
-- Check questions
SELECT * FROM questions ORDER BY created_at DESC LIMIT 10;

-- Check reputation system working
SELECT email, reputation FROM users ORDER BY reputation DESC LIMIT 10;

-- Check votes
SELECT * FROM question_votes;
SELECT * FROM answer_votes;
```

---

## Success Metrics

- ✅ Full CRUD operations on questions
- ✅ Voice recording working on questions and answers
- ✅ Image uploads functional
- ✅ Voting system with reputation updates
- ✅ Bookmark and follow features
- ✅ Search and filtering working
- ✅ Responsive design on all screens
- ✅ Proper authentication and authorization
- ✅ Clean, intuitive UI

---

## Deployment Notes

### Environment Variables
Ensure these are set:
- `DATABASE_URL` - PostgreSQL connection
- `JWT_SECRET` - Token signing key
- `PORT` - Server port (default 5000)

### Database Migration
```bash
cd backend
npx prisma db push
npx prisma generate
```

### File Storage
- Ensure `/uploads` directory has write permissions
- Configure proper file size limits in production
- Consider cloud storage (S3) for production scale

---

## Support & Maintenance

### Common Issues
1. **Audio not recording** - Check browser microphone permissions
2. **Images not uploading** - Verify upload middleware and file size limits
3. **Votes not updating** - Check user authentication token
4. **Reputation not changing** - Verify transaction blocks in vote endpoints

### Monitoring
- Track question/answer creation rates
- Monitor reputation distribution
- Watch for spam/abuse patterns
- Track voice recording usage

---

## Conclusion

The Q&A Forum is now fully integrated into StudyHub with professional-grade features that rival Stack Overflow. Students can ask questions, provide detailed answers with voice explanations, earn reputation, and build a knowledge base for the community.

**Status**: ✅ Production Ready
**Last Updated**: 2024
**Version**: 1.0.0
