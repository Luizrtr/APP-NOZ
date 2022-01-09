/* eslint-disable react/no-array-index-key */
import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import Route from './Route';
import routes from './routes';

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<></>}>
      <Switch>
        {routes.map(route => (
          <Route key={uuid()} {...route} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default Routes;
