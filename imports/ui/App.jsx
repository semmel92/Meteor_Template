import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';

export const App = () => {
    const [launchData, setLaunchData] = useState(null);

    useEffect(() => {
        Meteor.call('lti.getLaunchData', (error, data) => {
            if (error) {
                console.error('Fehler beim Abrufen der LTI-Launch-Daten:', error);
            } else {
                setLaunchData(data);
            }
        });
    }, []);

    return (
        <div className="app">
            <header>
                <h1>LTI Tool Beispiel</h1>
            </header>
            <main>
                {launchData ? (
                    <div>
                        <p>Launch-Daten empfangen:</p>
                        <pre>{JSON.stringify(launchData, null, 2)}</pre>
                    </div>
                ) : (
                    <p>Warte auf LTI-Launch...</p>
                )}
            </main>
        </div>
    );
};
