import { combineReducers } from 'redux';
import theme from './containers/reducers';
import { backend, notifications } from './containers/app/reducers';
import geonodeAverageResponse from './components/cels/geonode-data/reducers';
import { geonodeCpuStatus, geonodeMemStatus } from './components/cels/geonode-status/reducers';
import { geonodeResponseSequence } from './components/organisms/geonode-analytics/reducers';
import { geonodeThroughputSequence } from './components/organisms/geonode-analytics/reducers';
import { geonodeErrorSequence } from './components/organisms/geonode-analytics/reducers';
import { geonodeCpuSequence } from './components/organisms/geonode-status/reducers';
import { geonodeMemorySequence } from './components/organisms/geonode-status/reducers';
import { interval, autoRefresh } from './components/organisms/header/reducers';
import uptime from './components/cels/uptime/reducers';


const reducers = {
  autoRefresh,
  backend,
  geonodeAverageResponse,
  geonodeCpuSequence,
  geonodeCpuStatus,
  geonodeErrorSequence,
  geonodeMemStatus,
  geonodeMemorySequence,
  geonodeResponseSequence,
  geonodeThroughputSequence,
  interval,
  notifications,
  theme,
  uptime,
};


const rootReducer = combineReducers(reducers);

export default rootReducer;
