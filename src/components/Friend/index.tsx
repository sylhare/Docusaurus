import React from 'react';

export default function FriendsComponent({friends}) {
  return <div>Your friends are {friends.join(',')}</div>;
}
