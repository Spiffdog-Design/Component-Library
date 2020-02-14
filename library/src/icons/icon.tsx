import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FaIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

library.add(far, fas);

export interface IconProps extends FontAwesomeIconProps { }
const Icon: React.FC<IconProps> = (props) => <FaIcon {...props} />;
export default Icon;
