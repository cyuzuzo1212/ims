import React, { useState } from 'react';

const BusinessGoals = ({ onNext, onBack }) => {
  const [businessgoal, setBusinessGoal] = useState('');
  const [challenges, setChallenges] = useState('');
  const [comment, setComment] = useState('');
  const [color, setColor ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div>
      <h3>Business Goals</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="businessgoal">Business Goal</label>
        <input type="text" id="businessgoal" value={businessgoal} onChange={(e) => setBusinessGoal(e.target.value)}/>
        
        <label htmlFor="challenges">Challenges</label>
        <input type="text" id="challenges" value={challenges} onChange={(e) => setChallenges(e.target.value)} />  
        
        <label htmlFor="comment"> Commment</label>
        <input type="text" id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />  

        <label htmlFor="color">Color</label>
        <input type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)} />

<button type="submit">submit</button>
</form>
</div>
);
};

export default BusinessGoals;