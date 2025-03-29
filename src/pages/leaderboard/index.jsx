import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetLeaderboard } from '../../states/leaderboard/action';
import Avatar from '../../components/Avatar';
import Shimmer from '../../components/Shimmer';

function LeaderboardPage() {
    const dispatch = useDispatch();
    const leaderboard = useSelector((states) => states.leaderboard);

    useEffect(() => {
        dispatch(asyncGetLeaderboard());
    }, [dispatch]);

    return (
        <div className="w-full mx-auto px-2 py-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h1 className="text-2xl font-bold text-gray-900">Leaderboard</h1>
                    <p className="text-gray-600 mt-2">Top contributors in our community</p>
                </div>
                <div className="divide-y divide-gray-100">
                    {leaderboard.length === 0 ? (
                        [...Array(5)].map((_, index) => (
                            <div key={index} className="p-6 flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 flex items-center justify-center">
                                            <Shimmer width="w-8" height="h-8" rounded="rounded-full" />
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <Shimmer width="w-12" height="h-12" rounded="rounded-full" />
                                        <div>
                                            <Shimmer width="w-32" height="h-4" className="mb-2" />
                                            <Shimmer width="w-48" height="h-3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Shimmer width="w-20" height="h-8" rounded="rounded-lg" />
                                </div>
                            </div>
                        ))
                    ) : (
                        leaderboard.map((user, index) => (
                            <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 flex items-center justify-center text-2xl font-bold text-gray-500">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <Avatar name={user.user.name} />
                                        <div>
                                            <h3 className="font-semibold text-gray-800">{user.user.name}</h3>
                                            <p className="text-sm text-gray-500">{user.user.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="bg-[#7857ED]/10 text-[#7857ED] px-4 py-2 rounded-lg">
                                        <span className="font-semibold">{user.score}</span>
                                        <span className="ml-1 text-sm">points</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default LeaderboardPage;