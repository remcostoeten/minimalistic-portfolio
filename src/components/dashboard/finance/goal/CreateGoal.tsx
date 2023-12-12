import React from 'react';
import { FirebaseForm } from '../FirebaseForm';

const GoalSetting = () => {
    const fields = [
        { name: 'goalAmount', type: 'number', placeholder: 'Goal Amount' },
        { name: 'currentSavings', type: 'number', placeholder: 'Current Savings' },
    ];

    return <FirebaseForm fields={fields} collectionName="goals" />;
};

export default GoalSetting;
