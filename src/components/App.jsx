// import { Mailbox } from './Mailbox';
// import { Product } from './Product';
// import { BookList, favouriteBooks } from './BookList';
// import Card from './Card';
// import Alert from './Alert';

// import { HiUser } from 'react-icons/hi';

// export const UserMenu = ({ name }) => {
//   return (
//     <div>
//       <p>
//         <HiUser className="my-icon" size="24" /> {name}
//       </p>
//     </div>
//   );
// };

// export default function App() {
//   return (
//     <div>
{
  /* <h1>Best selling</h1> */
}

{
  /* <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      /> */
}
{
  /* 
      <Mailbox username="Natalie" messages={('hello', 'message1')} />

      <h1>Books of the week</h1>
      <BookList books={favouriteBooks} />

      <Card>
        <h1>Card title</h1>
        <p>Text between opening and closing tag</p>
      </Card>

      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>

      <UserMenu></UserMenu> */
}
//       <Profile
//         name={userData.username}
//         tag={userData.tag}
//         location={userData.location}
//         image={userData.avatar}
//         stats={userData.stats}
//       />
//     </div>
//   );
// }

import Profile from './Profile';
import userData from '../userData.json';

export default function App() {
  return (
    <>
      {' '}
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />{' '}
    </>
  );
}
