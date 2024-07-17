import dayjs from 'dayjs';

function getformatDate(createdAt) {
  return dayjs(createdAt).format('YYYY.MM.DD');
}

export default getformatDate;
