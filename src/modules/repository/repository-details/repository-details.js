import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLoadingSingleRepoReducer, useSelectedReducer, useSavedReducer } from '../../../store/reducer';
import { useDispatch } from 'react-redux';
import { getSingleRepo, saveRepositoryRequest } from '../../../store/actions';

const RepositoryDetails = () => {
    const dispatch = useDispatch();
    const loading = useLoadingSingleRepoReducer();
    const repo = useSelectedReducer();
    const { orgId, id } = useParams();
    const saved = useSavedReducer();
    useEffect(() => {
        if (!repo && !loading) {
            dispatch(getSingleRepo(orgId, id));
        }
    }, [dispatch, orgId, id, repo, loading]);

    const trackRepo = (e) => {
        e.preventDefault();
        dispatch(saveRepositoryRequest(repo));
    }

    return (<>
        {loading || !repo? <div>Loading...</div> :
            <div>
                <div>
                    <div>
                        Name:
                    </div>
                    <div>
                        {repo.name}
                    </div>
                </div>
                <div>
                    <div>
                        Link:
                    </div>
                    <div>
                        <a href={repo.html_url}  rel='noopener noreferrer' target={'_blank'}>{repo.html_url}</a>
                    </div>
                </div>
                <div>
                    <div>Forks:</div>
                    <div>{repo.forks_count}</div>
                    <div>Stars:</div>
                    <div>{repo.stargazers_count}</div>
                    <div>Watchers:</div>
                    <div>{repo.watchers_count}</div>
                </div>
                <div>
                    <h3>Commits:</h3>
                    <div>
                        {repo.commits.map((commit, index) => <div key={index}>
                            <div>Message: {commit.message}</div>
                            <div>Date: {commit.timestamp}</div>
                        </div>)}
                    </div>

                </div>
                <button onClick={trackRepo} disabled={saved!==null}>Track Repo</button>
            </div>}
    </>);
};

export default RepositoryDetails;