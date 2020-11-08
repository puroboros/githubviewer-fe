import React, { useEffect } from 'react';
import { useFilteredReposReducer, useLoadingReposReducer, useReposReducer } from '../../../store/reducer';
import { useDispatch } from 'react-redux';
import { getReposFromCompany, setFilterRepos } from '../../../store/actions';
import { paths } from '../../../routes/routes';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ListRepositories = () => {
    const dispatch = useDispatch();
    const filteredRepos = useFilteredReposReducer();
    const repos = useReposReducer();
    const loading = useLoadingReposReducer();
    const { orgId } = useParams();
    useEffect(() => {
        if (repos.length === 0 && loading === false) {
            dispatch(getReposFromCompany(orgId));
        }
    }, [dispatch, repos, loading, orgId]);
    const handleChange = (change) => {
        if(change.target.value) {
            dispatch(setFilterRepos(change.target.value));
        }
    }
    return (
        <>
            {loading ?
                <div>Loading...</div>
                : <div>
                    <div><p>Filter:</p><input onChange={handleChange}/></div>
                    {filteredRepos.map((repo, index) =>
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