# StudyHub - Peer-to-Peer E-Learning Platform

A comprehensive Flutter-based peer-to-peer e-learning platform that connects students, tutors, and educational resources in a collaborative environment.

## 🌟 Features

### 🔐 Authentication System
- **Email/Password Authentication** - Secure user registration and login
- **Google Sign-In Integration** - Quick authentication with Google accounts
- **Firebase Authentication** - Robust backend authentication system
- **User Profile Management** - Automatic profile creation in Firestore

### 🏠 StudyHub Dashboard
- **Personalized Greeting** - Dynamic welcome messages based on time of day
- **Navigation Sidebar** - Quick access to all platform features
- **Featured Study Sessions** - Highlighted active study groups
- **Recent Questions Feed** - Latest Q&A from the community
- **Live Activity Stream** - Real-time updates on platform activity
- **Study Tips Widget** - Helpful learning techniques and advice

### 👥 Study Groups (StudySphere)
- **Group Management** - Create and join study groups by subject
- **Live Study Sessions** - Video call integration for group study
- **Post Sharing** - Share resources, questions, and updates
- **Member Directory** - View group members and administrators
- **File Sharing** - Upload and download study materials
- **Activity Feed** - Track group discussions and updates

### 💬 Developer Forum
- **Q&A Platform** - Ask and answer technical questions
- **Tag System** - Organize questions by programming languages and topics
- **Voting System** - Community-driven content ranking
- **Search Functionality** - Find relevant questions and answers
- **User Reputation** - Track contributions and expertise
- **Trending Topics** - Popular discussions and tags

### 📚 Premium Notes Marketplace
- **Note Marketplace** - Buy and sell high-quality study notes
- **University Verification** - Verified notes from top institutions
- **Rating System** - Community reviews and ratings
- **Subject Filtering** - Find notes by category and difficulty
- **Price Range Filters** - Budget-friendly search options
- **File Format Support** - PDF, Word, PowerPoint compatibility

### 🎓 Tutor Finder
- **Tutor Discovery** - Find qualified tutors by subject
- **Skill-Based Matching** - Match with tutors based on expertise
- **Availability Scheduling** - Book sessions based on tutor availability
- **Rating & Reviews** - Community feedback on tutor quality
- **Instant Booking** - Quick session scheduling
- **Price Comparison** - Compare hourly rates across tutors

## 🎨 Design System

### Professional 4-Color Palette
- **Primary Blue** (`#2563EB`) - Navigation, buttons, branding
- **Accent Green** (`#059669`) - Success states, positive actions
- **Neutral Gray** (`#374151`) - Text, subtle UI elements
- **Pure White** (`#FFFFFF`) - Clean backgrounds, contrast

### UI/UX Features
- **Material Design 3** - Modern, consistent design language
- **Responsive Layout** - Works on desktop, tablet, and mobile
- **Professional Icons** - Consistent iconography throughout
- **Smooth Animations** - Polished user interactions
- **Accessibility** - High contrast ratios and readable fonts

## 🛠️ Technical Stack

### Frontend
- **Flutter 3.0+** - Cross-platform UI framework
- **Dart** - Programming language
- **Riverpod** - State management solution
- **GoRouter** - Declarative routing system
- **Material Design 3** - UI component library

### Backend & Services
- **Firebase Authentication** - User authentication
- **Cloud Firestore** - NoSQL database
- **Firebase Storage** - File storage and management
- **Firebase Analytics** - User behavior tracking
- **Firebase Crashlytics** - Error monitoring

### Key Dependencies
```yaml
dependencies:
  flutter_riverpod: ^2.4.9      # State management
  go_router: ^13.0.0            # Navigation
  firebase_core: ^2.27.1        # Firebase core
  firebase_auth: ^4.19.6        # Authentication
  cloud_firestore: ^4.17.3      # Database
  google_sign_in: ^6.2.1        # Google authentication
  cached_network_image: ^3.3.0  # Image caching
  google_fonts: ^6.1.0          # Typography
```

## 📱 Platform Support

- ✅ **Web** - Chrome, Firefox, Safari, Edge
- ✅ **Windows** - Desktop application
- ✅ **Android** - Mobile and tablet
- ✅ **iOS** - iPhone and iPad
- ✅ **macOS** - Desktop application
- ✅ **Linux** - Desktop application

## 🚀 Getting Started

### Prerequisites
- Flutter SDK 3.0 or higher
- Dart SDK 3.0 or higher
- Firebase project setup
- Developer Mode enabled (Windows)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/studyhub-elearning.git
   cd studyhub-elearning
   ```

2. **Install dependencies**
   ```bash
   flutter pub get
   ```

3. **Configure Firebase**
   - Create a Firebase project
   - Add your `google-services.json` (Android)
   - Add your `GoogleService-Info.plist` (iOS)
   - Update `firebase_options.dart` with your config

4. **Run the application**
   ```bash
   # Web
   flutter run -d chrome
   
   # Windows
   flutter run -d windows
   
   # Android
   flutter run -d android
   
   # iOS
   flutter run -d ios
   ```

## 🏗️ Project Structure

```
lib/
├── config/
│   ├── routes/           # App routing configuration
│   ├── shell/           # Main app shell and navigation
│   └── theme/           # App theme and styling
├── core/
│   ├── constants/       # App colors, text styles, constants
│   ├── network/         # Firestore service and API calls
│   └── widgets/         # Reusable UI components
├── features/
│   ├── auth/           # Authentication screens and logic
│   ├── study_hub/      # Main dashboard functionality
│   ├── groups/         # Study groups management
│   ├── forum/          # Q&A forum system
│   ├── marketplace/    # Notes marketplace
│   └── tutors/         # Tutor finder system
├── shared/             # Shared utilities and helpers
├── app.dart           # Main app configuration
├── main.dart          # App entry point
└── firebase_options.dart # Firebase configuration
```

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Authentication with Email/Password and Google providers
3. Create a Firestore database
4. Add your platform-specific configuration files

### Environment Variables
Create a `.env` file in the root directory:
```env
FIREBASE_API_KEY=your_api_key
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
```

## 🧪 Testing

Run tests with:
```bash
flutter test
```

## 📦 Building for Production

### Web
```bash
flutter build web --release
```

### Windows
```bash
flutter build windows --release
```

### Android
```bash
flutter build apk --release
```

### iOS
```bash
flutter build ios --release
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Flutter team for the amazing framework
- Firebase for backend services
- Material Design team for design guidelines
- Open source community for inspiration and packages

## 📞 Support

For support, email support@studyhub.com or join our Discord community.

## 🔗 Links

- [Live Demo](https://studyhub-demo.web.app)
- [Documentation](https://docs.studyhub.com)
- [API Reference](https://api.studyhub.com/docs)
- [Discord Community](https://discord.gg/studyhub)

---

**Built with ❤️ using Flutter**