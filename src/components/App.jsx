import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import DonePage from 'pages/DonePage/DonePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { ActivitiesPage } from 'pages/ActivitiesPage/ActivitiesPage';

// import DoneActivites from './DoneActivites/DoneActivites';
// import ModalQuantityPeople from './ModalQuantityPeople/ModalQuantityPeople';

// export const App = () => {
//   const [showStep, setShowStep] = useState(false);
//   const [doneActivites, setDoneActivites] = useState(false);

//   const handleButtonClick = () => {
//     setShowStep(true);
//   };

//   const handleDoneActivites = () => {
//     setDoneActivites(true);
//   };

//   const handleContinueClick = () => {
//     setDoneActivites(false);
//   };

//   return (
//     <div>
//       {showStep === true ? (
//         <Activites onDoneButtonClick={handleDoneActivites} />
//       ) : (
//         <StartBreak onButtonClick={handleButtonClick} />
//       )}
//       <DoneActivites />
//     </div>
//   );
// };

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/activities"
          element={<ActivitiesPage multi="false" />}
        ></Route>
        <Route
          path="/activitiesMulti"
          element={<ActivitiesPage multi="true" />}
        ></Route>
        <Route path="/done" element={<DonePage />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};
