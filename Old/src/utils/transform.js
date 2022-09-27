import {get} from 'lodash';

export const getParams = props => get(props, 'route.params', {});
