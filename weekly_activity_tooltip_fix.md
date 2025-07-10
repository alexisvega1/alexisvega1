# Weekly Activity Tooltip Fix - Implementation Plan

## Issue Description
The weekly activity tooltip currently shows "Activity Level: No Activity" even when a user has studied at least one flashcard. It should show "Activity Level: Low" when the user has studied at least one flashcard.

## Implementation Plan

### 1. Locate the Activity Level Logic
**Files to search for:**
- Look for files containing "Activity Level" or "No Activity" text
- Search for weekly activity calculation logic
- Find tooltip component files
- Look for activity level determination functions

**Common locations in mobile apps:**
```
/src/components/ActivityTooltip.js
/src/components/WeeklyActivity.js
/src/utils/activityCalculator.js
/src/helpers/activityLevel.js
/src/services/activityService.js
```

### 2. Identify the Current Logic
**Expected current implementation:**
```javascript
// Current logic (needs to be fixed)
function getActivityLevel(studiedCards) {
  if (studiedCards === 0) {
    return "No Activity";
  } else if (studiedCards < 5) {
    return "Low";
  } else if (studiedCards < 15) {
    return "Medium";
  } else {
    return "High";
  }
}
```

### 3. Required Fix
**Updated logic:**
```javascript
// Fixed logic
function getActivityLevel(studiedCards) {
  if (studiedCards === 0) {
    return "No Activity";
  } else if (studiedCards >= 1 && studiedCards < 5) {
    return "Low";           // This should trigger for even 1 flashcard
  } else if (studiedCards < 15) {
    return "Medium";
  } else {
    return "High";
  }
}
```

### 4. Search Commands to Run

**Step 1: Find activity level text**
```bash
grep -r "Activity Level" .
grep -r "No Activity" .
grep -r "Low.*activity" .
```

**Step 2: Find tooltip components**
```bash
find . -name "*tooltip*" -type f
find . -name "*activity*" -type f
grep -r "tooltip" . --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx"
```

**Step 3: Find activity calculation logic**
```bash
grep -r "studiedCards\|flashcard.*count\|activity.*level" . --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx"
```

### 5. Implementation Steps

1. **Locate the file** containing the activity level determination logic
2. **Identify the function** that calculates activity levels
3. **Update the condition** to ensure `studiedCards >= 1` maps to "Low" activity
4. **Test the change** to ensure it works correctly
5. **Verify tooltip display** shows "Activity Level: Low" for 1+ flashcards

### 6. Testing Checklist

- [ ] 0 flashcards studied → "Activity Level: No Activity"
- [ ] 1 flashcard studied → "Activity Level: Low" ✓ (This is the fix)
- [ ] 2-4 flashcards studied → "Activity Level: Low"
- [ ] 5+ flashcards studied → "Activity Level: Medium" (or whatever threshold)
- [ ] Higher thresholds → "Activity Level: High"

### 7. Code Search Patterns

**JavaScript/TypeScript patterns:**
```javascript
// Look for these patterns
if (count === 0) return "No Activity"
if (studiedCards == 0) return "No Activity"
studiedCards === 0 ? "No Activity" : ...
!studiedCards ? "No Activity" : ...
```

**React component patterns:**
```jsx
// Tooltip component patterns
<Tooltip title={`Activity Level: ${activityLevel}`}>
{activityLevel === "No Activity" ? ... : ...}
```

### 8. File Extensions to Check
- `.js` - JavaScript files
- `.jsx` - React JSX files  
- `.ts` - TypeScript files
- `.tsx` - React TypeScript files
- `.vue` - Vue.js files (if using Vue)
- `.dart` - Dart files (if using Flutter)
- `.swift` - Swift files (if iOS native)
- `.java` - Java files (if Android native)

### 9. Semantic Search Queries
Once repository is accessible, use these queries:
- "How is weekly activity level calculated?"
- "Where is the activity tooltip rendered?"
- "What determines when to show No Activity vs Low activity?"
- "How are studied flashcards counted for activity level?"

## Next Steps
1. **Access the repository** - Ensure the correct repository is available
2. **Run the search commands** above to locate the relevant files
3. **Implement the fix** by updating the activity level logic
4. **Test thoroughly** to ensure the change works as expected