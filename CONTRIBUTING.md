# Contributing to StudyHub

Thank you for your interest in contributing to StudyHub! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues
1. Check existing issues to avoid duplicates
2. Use the issue template when creating new issues
3. Provide detailed information including:
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Device/platform information

### Suggesting Features
1. Open a feature request issue
2. Describe the feature and its benefits
3. Provide mockups or examples if possible
4. Discuss implementation approach

### Code Contributions

#### Prerequisites
- Flutter SDK 3.0+
- Dart SDK 3.0+
- Git knowledge
- Firebase account for testing

#### Development Setup
1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature
4. Set up Firebase configuration
5. Run `flutter pub get`
6. Start development server

#### Coding Standards

**Dart/Flutter Guidelines:**
- Follow [Dart Style Guide](https://dart.dev/guides/language/effective-dart/style)
- Use `flutter analyze` to check code quality
- Format code with `dart format`
- Write meaningful commit messages

**Code Structure:**
```
lib/
├── features/           # Feature-based organization
│   └── feature_name/
│       ├── data/       # Data layer (repositories, models)
│       ├── domain/     # Business logic (entities, use cases)
│       └── presentation/ # UI layer (screens, widgets, providers)
├── core/              # Shared utilities
├── config/            # App configuration
└── shared/            # Shared widgets and utilities
```

**Naming Conventions:**
- Files: `snake_case.dart`
- Classes: `PascalCase`
- Variables/Functions: `camelCase`
- Constants: `SCREAMING_SNAKE_CASE`
- Private members: `_leadingUnderscore`

**Widget Guidelines:**
- Keep widgets small and focused
- Use `const` constructors when possible
- Extract complex widgets into separate files
- Follow Material Design 3 guidelines

#### State Management
- Use Riverpod for state management
- Create providers in `providers/` directory
- Use `ConsumerWidget` for reactive UI
- Handle loading and error states properly

#### Testing
- Write unit tests for business logic
- Write widget tests for UI components
- Maintain test coverage above 80%
- Run tests with `flutter test`

#### Pull Request Process

1. **Before Submitting:**
   - Ensure all tests pass
   - Run `flutter analyze` with no issues
   - Format code with `dart format`
   - Update documentation if needed

2. **PR Requirements:**
   - Clear title and description
   - Link related issues
   - Include screenshots for UI changes
   - Add tests for new functionality
   - Update CHANGELOG.md

3. **Review Process:**
   - Code review by maintainers
   - Address feedback promptly
   - Maintain clean commit history
   - Squash commits if requested

## 🎨 Design Guidelines

### Color System
Use the established 4-color palette:
- Primary Blue: `#2563EB`
- Accent Green: `#059669`
- Neutral Gray: `#374151`
- Pure White: `#FFFFFF`

### Typography
- Use Google Fonts (Inter/Roboto)
- Follow Material Design text scales
- Ensure proper contrast ratios

### Icons
- Use Material Design icons
- Maintain consistent icon sizes
- Follow platform conventions

## 🔧 Development Workflow

### Branch Naming
- Feature: `feature/description`
- Bug fix: `fix/description`
- Documentation: `docs/description`
- Refactor: `refactor/description`

### Commit Messages
Follow conventional commits:
```
type(scope): description

feat(auth): add Google Sign-In integration
fix(ui): resolve navigation bar overflow
docs(readme): update installation instructions
```

### Release Process
1. Update version in `pubspec.yaml`
2. Update CHANGELOG.md
3. Create release branch
4. Test thoroughly
5. Merge to main
6. Tag release

## 🧪 Testing Guidelines

### Unit Tests
```dart
// Example unit test
void main() {
  group('AuthProvider', () {
    test('should sign in user successfully', () async {
      // Arrange
      final authProvider = AuthProvider();
      
      // Act
      final result = await authProvider.signIn(email, password);
      
      // Assert
      expect(result.isSuccess, true);
    });
  });
}
```

### Widget Tests
```dart
// Example widget test
void main() {
  testWidgets('LoginScreen should display login form', (tester) async {
    // Arrange
    await tester.pumpWidget(MaterialApp(home: LoginScreen()));
    
    // Act & Assert
    expect(find.byType(TextField), findsNWidgets(2));
    expect(find.text('Login'), findsOneWidget);
  });
}
```

## 📚 Documentation

### Code Documentation
- Document public APIs
- Use meaningful variable names
- Add comments for complex logic
- Update README for new features

### API Documentation
- Document Firebase collections
- Explain data models
- Provide usage examples

## 🚀 Deployment

### Web Deployment
```bash
flutter build web --release
# Deploy to Firebase Hosting or preferred platform
```

### Mobile Deployment
```bash
# Android
flutter build apk --release

# iOS
flutter build ios --release
```

## 🆘 Getting Help

### Resources
- [Flutter Documentation](https://docs.flutter.dev)
- [Dart Documentation](https://dart.dev/guides)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Material Design 3](https://m3.material.io)

### Community
- GitHub Discussions for questions
- Issues for bug reports
- Discord for real-time chat
- Email: dev@studyhub.com

## 📋 Checklist

Before submitting a PR, ensure:
- [ ] Code follows style guidelines
- [ ] Tests are written and passing
- [ ] Documentation is updated
- [ ] CHANGELOG.md is updated
- [ ] No breaking changes (or properly documented)
- [ ] Screenshots included for UI changes
- [ ] Performance impact considered
- [ ] Accessibility guidelines followed

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Annual contributor highlights
- Special badges for significant contributions

Thank you for contributing to StudyHub! 🎓