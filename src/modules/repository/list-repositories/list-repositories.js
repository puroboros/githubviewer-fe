import React, { useEffect } from 'react';
import { useReposReducer, useLoadingReposReducer } from '../../../store/reducer';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getReposFromCompany } from '../../../store/actions';
import { paths } from '../../../routes/routes';
import { Link } from 'react-router-dom';

const ListRepositories = () => {
    const dispatch = useDispatch();
    const repos = useReposReducer();
    const loading = useLoadingReposReducer();
    const { orgId } = useParams();
    useEffect(() => {
        if (repos.length === 0 && loading === false) {
            dispatch(getReposFromCompany(orgId));
        }
    }, [dispatch, repos, loading, orgId]);
    return (
        <>
            {loading ?
                <div>Loading...</div>
                : <div>
                    {repos.map((repo, index) =>
                        <Link to={`${process.env.REACT_APP_APP_BASE_URL}${paths.viewElementBase}${repo.owner.login}/${repo.name}`}
                            key={index}>
                            <div>
                                Repository: {repo.name}
                            </div>
                            <div>Last update: {repo.updated_at}</div>
                        </Link>
                    )}
                </div>
            }
        </>
    );
}

export default ListRepositories;