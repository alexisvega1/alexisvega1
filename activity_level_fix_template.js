// Activity Level Fix Template
// This template shows the common patterns and fixes needed

// ===== BEFORE (Current broken logic) =====
function getActivityLevel_BROKEN(studiedCards) {
  // This is likely the current broken implementation
  if (studiedCards === 0) {
    return "No Activity";
  } else if (studiedCards < 5) {
    return "Low";  // This condition might not be reached for studiedCards = 1
  } else if (studiedCards < 15) {
    return "Medium";
  } else {
    return "High";
  }
}

// ===== AFTER (Fixed logic) =====
function getActivityLevel_FIXED(studiedCards) {
  // Fixed implementation - ensures 1+ flashcards show "Low"
  if (studiedCards === 0) {
    return "No Activity";
  } else if (studiedCards >= 1 && studiedCards < 5) {
    return "Low";  // This will now correctly trigger for 1+ flashcards
  } else if (studiedCards < 15) {
    return "Medium";
  } else {
    return "High";
  }
}

// ===== ALTERNATIVE PATTERNS TO LOOK FOR =====

// Pattern 1: Ternary operator
const getActivityLevel_Ternary = (studiedCards) => {
  return studiedCards === 0 ? "No Activity" :
         studiedCards < 5 ? "Low" :
         studiedCards < 15 ? "Medium" : "High";
};

// Pattern 2: Switch statement
function getActivityLevel_Switch(studiedCards) {
  switch (true) {
    case studiedCards === 0:
      return "No Activity";
    case studiedCards < 5:
      return "Low";
    case studiedCards < 15:
      return "Medium";
    default:
      return "High";
  }
}

// Pattern 3: Object/Map based
const ACTIVITY_LEVELS = {
  getLevel: (studiedCards) => {
    if (studiedCards === 0) return "No Activity";
    if (studiedCards < 5) return "Low";
    if (studiedCards < 15) return "Medium";
    return "High";
  }
};

// ===== REACT COMPONENT PATTERNS =====

// Pattern 1: Inline tooltip
const WeeklyActivityTooltip = ({ studiedCards }) => {
  const activityLevel = getActivityLevel_FIXED(studiedCards);
  
  return (
    <Tooltip title={`Activity Level: ${activityLevel}`}>
      <div className="activity-indicator">
        {/* Activity visualization */}
      </div>
    </Tooltip>
  );
};

// Pattern 2: Component with state
const ActivityDisplay = ({ studiedCards }) => {
  const [activityLevel, setActivityLevel] = useState("No Activity");
  
  useEffect(() => {
    setActivityLevel(getActivityLevel_FIXED(studiedCards));
  }, [studiedCards]);
  
  return (
    <div className="activity-level">
      Activity Level: {activityLevel}
    </div>
  );
};

// ===== TESTING EXAMPLES =====

// Test cases to verify the fix
console.log("Testing activity level calculation:");
console.log("0 cards:", getActivityLevel_FIXED(0));   // Should be "No Activity"
console.log("1 card:", getActivityLevel_FIXED(1));    // Should be "Low" ✓
console.log("3 cards:", getActivityLevel_FIXED(3));   // Should be "Low"
console.log("5 cards:", getActivityLevel_FIXED(5));   // Should be "Medium"
console.log("15 cards:", getActivityLevel_FIXED(15)); // Should be "High"

// ===== COMMON SEARCH PATTERNS =====

// These are the exact strings to search for in the codebase:
// "Activity Level: No Activity"
// "Activity Level: Low"
// "studiedCards === 0"
// "studiedCards == 0"
// "!studiedCards"
// "flashcard" + "count"
// "weekly" + "activity"
// "tooltip" + "activity"

// ===== POTENTIAL FILE LOCATIONS =====

// Look for these files in the repository:
// - src/components/ActivityTooltip.js
// - src/components/WeeklyActivity.js
// - src/utils/activityCalculator.js
// - src/helpers/activityLevel.js
// - src/services/activityService.js
// - src/components/Dashboard.js
// - src/components/StudyStats.js
// - src/hooks/useActivity.js