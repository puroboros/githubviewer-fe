import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useLoadingSingleRepoReducer, useSelectedReducer } from "../../../store/reducer";
import { useDispatch } from "react-redux";
import { getSingleRepo } from "../../../store/actions";

const RepositoryDetails = () => {
    const dispatch = useDispatch();
    const loading = useLoadingSingleRepoReducer();
    const repo = useSelectedReducer();
    const { orgId, id } = useParams();
    useEffect(() => {
        console.log('loading ', loading);
        console.log('repo ', repo);
        if (!repo && !loading) {
            dispatch(getSingleRepo(orgId, id));
        }
    }, [dispatch, orgId, id, repo, loading]);
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
                        {repo.url}
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
            </div>}
    </>);
};

export default RepositoryDetails;