# Movie Quiz

Movie Quiz is a simple React Native quiz app for Android that tests how well you know popular movies. Each question shows a movie poster loaded from the internet and asks a question about it. The player picks an answer from a dropdown list. At the end, the player taps "Submit Answers" to see how many answers are correct, along with a feedback message based on their score.

# Features Highlight

**Features**
- 5 movie questions: Toy Story, Frozen, Avengers: Endgame, Inside Out and Gladiator
- Movie posters loaded from online image links (TMDB)
- A dropdown (Picker) with 3 answer options for each question
- Different question styles: movie name, character name, villain, "which one is NOT" and release year
- A "Submit Answers" button that shows the score in an Alert
- Feedback that changes with the score:
  - 5/5: "Perfect score! You are a true movie buff!"
  - 3–4: "Well done!"
  - 0–2: "You can do better next time."
- Dark cinema theme with a yellow header
- The header stays fixed at the top while the questions scroll

**Concepts Applied**
- **Re-usable custom component:** `Question` is kept in its own file (`components/Question.js`) and used 5 times with different props (image, question, option1–3, onValueChange)
- **Props:** data and functions are passed from `App.js` into the `Question` component
- **State (`useState`):** one state per question stores the user's chosen answer
- **Picker (`@react-native-picker/picker`):** `onValueChange` saves the selected answer into State
- **Image with online URI:** `source={{uri: '...'}}` with a set width and height, and `resizeMode='contain'`
- **ScrollView:** lets the user scroll through all the questions
- **Button and Alert:** `onPress` counts the score with `if` statements and shows the result with `Alert.alert()`
- **JavaScript logic:** `if / else if / else` picks the feedback message based on the score
- **Inline styling:** background colour, text colour, font size, padding and margin

# ScreenShots of App

Screenshots: <br>
<img src="IMG/First%20Top.png" width="250"/>
<img src="IMG/Last%20Top.png" width="250"/>


# Demo Video

Demo Video Link: <br>
[Watch the demo video](IMG/Demo_Video.mp4)