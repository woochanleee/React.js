import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.scss';

const cx = classNames.bind(styles);

const CSSModule = () => {
    return (
        <div className={cx('wrapper', 'inverted')}>
            안녕하세요, 저는 <span className="something">CSSModule!</span>
        </div>
    );
};

export default CSSModule;