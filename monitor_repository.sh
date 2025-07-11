#!/bin/bash

# Monitor script for alexisvega1/fivetwentyeight-mobile repository access
# Once access is available, automatically proceed with activity level fix

REPO_URL="https://github.com/alexisvega1/fivetwentyeight-mobile.git"
REPO_NAME="fivetwentyeight-mobile"
CHECK_INTERVAL=300  # Check every 5 minutes

echo "🔍 Monitoring repository access: alexisvega1/fivetwentyeight-mobile"
echo "📋 Ready to implement activity level tooltip fix"
echo "⏰ Checking every ${CHECK_INTERVAL} seconds..."
echo "----------------------------------------"

while true; do
    echo "$(date): Checking repository access..."
    
    # Try to clone the repository
    if git clone "$REPO_URL" "$REPO_NAME" 2>/dev/null; then
        echo "✅ Repository access granted! Proceeding with implementation..."
        cd "$REPO_NAME"
        
        echo "🔍 Searching for activity level logic..."
        
        # Search for weekly activity tooltip implementation
        echo "Searching for weekly activity patterns..."
        find . -type f -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | xargs grep -l -i "activity.*level\|weekly.*activity\|tooltip.*activity" 2>/dev/null
        
        # Search for gamification utilities
        echo "Searching for gamification utilities..."
        find . -type f -name "*gamif*" -o -name "*activity*" -o -name "*level*" 2>/dev/null
        
        # Search for tooltip implementations
        echo "Searching for tooltip implementations..."
        find . -type f -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | xargs grep -l -i "tooltip\|popover\|hover" 2>/dev/null
        
        echo "📍 Repository cloned successfully. Manual implementation needed."
        echo "🛠️ Ready to apply activity level fix: 1+ flashcards = 'Low' activity"
        break
    else
        echo "❌ Repository still not accessible"
        rm -rf "$REPO_NAME" 2>/dev/null
    fi
    
    echo "⏳ Waiting ${CHECK_INTERVAL} seconds before next check..."
    sleep "$CHECK_INTERVAL"
done