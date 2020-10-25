import React, { useState } from 'react';
import fire from 'config/fire-config'

const ScoreBoard = () => {
    const [name, setName] = useState('');
    const [score, setScore] = useState('');
    const [date, setDate] = useState('');
    const [notification, setNotification] = useState('');

    const handleSubmit = (event) => {
        const time = new Date();
        setDate(time);
        setScore('69 seconds');

        console.log(date)
        console.log(score)

        event.preventDefault();

        sendData();
    }

    const sendData = () => {

        console.log({
            "Name": name,
            "Score": score,
            "Date": date,
        });

        fire.firestore()
        .collection('Scores')
        .add({
            "Name": name,
            "Score": score,
            "Date": date
        });


        setName('');
        setScore('');
        setDate('');

        setNotification('Highscore Saved');
        setTimeout(() => {
        setNotification('')
        }, 2000)
    }

  return (
    <div>
      <h2>Add Score</h2>
      {notification}
      <form onSubmit={handleSubmit}>
        <div>
          <p>Name:</p>
          <input
            type="text"
            value={name} 
            onChange={({target}) => setName(target.value)}
           />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default ScoreBoard;