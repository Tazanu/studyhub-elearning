# GroupChat UI Quick Reference

## New UI Elements

### 1. File Attach Button
```
┌─────────────────────────────────────────────┐
│  [📎] [___Type a message..._______] [Send]  │
└─────────────────────────────────────────────┘
   ↑
Paperclip icon - opens file picker
```

### 2. File Preview Bar (Before Sending)
```
┌───────────────────────────────────────────────┐
│  📎 document.pdf                         [X]  │
├───────────────────────────────────────────────┤
│  [📎] [___Type a message..._______] [Send]    │
└───────────────────────────────────────────────┘
```

### 3. Reply Preview Bar
```
┌───────────────────────────────────────────────┐
│  Replying to John                        [X]  │
│  Hey, are you coming to...                    │
├───────────────────────────────────────────────┤
│  [📎] [___Type a message..._______] [Send]    │
└───────────────────────────────────────────────┘
```

### 4. Message Bubble with Image
```
┌─ John Doe ────────┐
│ ╭─────────────╮   │
│ │ [Thumbnail] │   │  ← Click to view full-size
│ ╰─────────────╯   │
│ 2:34 PM  [↩] [✏]  │  ← Reply & Edit buttons
└───────────────────┘
```

### 5. Message Bubble with File
```
┌─ John Doe ─────────────┐
│ Check this out!        │
│ ┌──────────────────┐   │
│ │ 📄 Download PDF  │   │  ← Download chip
│ └──────────────────┘   │
│ 2:34 PM  [↩] [✏]       │
└────────────────────────┘
```

### 6. Reply Thread Preview
```
┌─ John Doe ───────────────────┐
│ ┌─ Jane Smith ─────────┐     │  ← Quoted preview
│ │ Hey, are you...      │     │     (click to scroll to original)
│ └──────────────────────┘     │
│ Yes, I'll be there!          │  ← New reply
│ 2:34 PM  [↩] [✏]             │
└──────────────────────────────┘
```

### 7. Edit Mode (Inline)
```
┌─ You ────────────────────────┐
│ [This is my message___] ✓ ✗  │  ← Inline input with save/cancel
│ 2:34 PM                       │
└───────────────────────────────┘
```

### 8. Edited Message Label
```
┌─ You ────────────────────────┐
│ This is my edited message    │
│ 2:34 PM · (edited)  [↩] [✏]  │  ← Shows (edited) label
└───────────────────────────────┘
```

## Button Locations

### On Every Message (Timestamp Row)
- **Your messages** (right-aligned, blue bubbles):
  - `[↩ Reply]` - Always visible
  - `[✏ Edit]` - Only visible within 15 minutes

- **Others' messages** (left-aligned, gray bubbles):
  - `[↩ Reply]` - Always visible

### Input Area (Bottom)
- `[📎 Attach]` - Left side, before text input
- `[Send ➤]` - Right side, after text input

### Header (Top)
- `[⟲ Refresh]` - Right side of header bar

## Icon Sizes
- **Action buttons** (Reply/Edit): 12px
- **Input buttons** (Attach/Send): 16-18px
- **File type icons**: 18px

## Color Scheme

### Light Theme
- Reply quote border: Blue (#0066ff)
- File chip background: var(--bg-main) = #f8fafc
- Button hover: Blue (#0066ff) background, white text

### Dark Theme
- Reply quote border: Blue (#0066ff)
- File chip background: var(--bg-main) = #0a0a0a
- Button hover: Blue (#0066ff) background, white text

## Keyboard Shortcuts

### In Edit Mode
- **Enter** → Save changes
- **Escape** → Cancel edit

### General
- **Tab** → Navigate between buttons/input (accessibility)
- **Space/Enter on buttons** → Activate (accessibility)

## File Type Icons

| Extension | Icon Used | Example |
|-----------|-----------|---------|
| jpg, jpeg, png, gif, webp | 🖼️ ImageIcon | Shown as thumbnail |
| pdf, doc, docx, txt | 📄 FileText | Shown as download chip |
| All others | 📁 File | Shown as download chip |

## Interaction Flow

### Sending a Message with File
1. Click paperclip → file picker opens
2. Select file → preview bar appears
3. (Optional) Type message text
4. Click Send → optimistic update → server confirmation

### Replying to a Message
1. Click Reply button on message → reply preview bar appears
2. Type response
3. Click Send → message shows quoted preview
4. Click quoted preview → scrolls to original (highlight animation)

### Editing a Message
1. Click Edit button (only shown if <15min old)
2. Input replaces message text inline
3. Type changes
4. Press Enter OR click ✓ → saves
5. Press Escape OR click ✗ → cancels
6. On save: "(edited)" label appears

## Animation Timings
- **Message entry**: 0.22s (ease [0.22,1,0.36,1])
- **Button hover**: Instant (0s transition)
- **Highlight flash**: 1.5s (ease-in-out)
- **Modal fade**: 0.3s (opacity transition)

## Accessibility Notes
- All buttons have aria-label or title attributes
- File input has proper label association
- Keyboard navigation works for all interactive elements
- Focus states visible on all buttons/inputs
- Color contrast meets WCAG AA standards in both themes
