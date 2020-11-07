import React from 'react';
import styles from './entry.module.scss';

import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { getReposFromCompany } from '../../store/actions';
import { paths } from '../../routes/routes'

const Entry = () => {
    const dispatch = useDispatch();

    const handleSubmit = (submit) => {
        submit.preventDefault();
        dispatch(getReposFromCompany(submit.target[0].value));
        dispatch(push(`${process.env.REACT_APP_APP_BASE_URL}${paths.repoViewUrl}${submit.target[0].value}`));
    }
    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h1>Enter the company name in order to view its repositories.</h1>
                <input type={'text'} name={'company'}/>
                <input type={'submit'}/>
            </form>
        </div>
    );
};

export default Entry;