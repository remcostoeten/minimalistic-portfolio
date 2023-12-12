import React from 'react';
import { FirebaseForm } from '../FirebaseForm';

const GoalSetting = () => {
    const fields = [
        { name: 'targetAmount', type: 'number', placeholder: 'Goal Amount' },
        { name: 'initialSavings', type: 'number', placeholder: 'Initial Savings' },
    ];

    return <FirebaseForm fields={fields} collectionName="goals" />;
};

export default GoalSetting;
