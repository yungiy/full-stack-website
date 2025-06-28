'use client';

import { Input } from '@material-tailwind/react';

export default function SearchComponent({ searchInput, setSearchInput }) {
  return (
    <Input
      value={searchInput}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setSearchInput(event.target.value)
      }
      label='Search Images'
      icon={<i className='fa-solid fa-magnifying-glass' />}
    />
  );
}
