import { useState } from 'react';
import RevewsIcon from '../../assets/icons/revews-icon.svg';
import {
  MdExpandMore,
  MdFavoriteBorder,
  MdFormatListBulleted,
  MdHourglassEmpty,
  MdTune,
} from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { FiChevronLeft } from 'react-icons/fi';

const NestedNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <div>
      <h1>Nested Nav</h1>
    </div>
  );
};

export default NestedNav;
