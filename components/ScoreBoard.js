import React, { useState } from 'react';
import fire from 'config/fire-config'

const CreateTask = () => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('20 seconds');
  const [date, setDate] = useState(new Date());
  const [notification, setNotification] = useState('');

  const handleSubmit = async(event) => {

    const time = new Date();
    setDate(time);
    setScore('20 seconds');

    event.preventDefault();
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
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
export default CreateTask;