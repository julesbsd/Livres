import React, { useState, Fragment } from 'react';
import {
  Input,
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import axios from 'axios';


export default function BookSearch() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const searchBooks = async () => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    setBooks(response.data.items);
    console.log(books);
  }
  return (
    <div className="flex items-center w-full justify-center mt-6">
      <div className="flex flex-col items-center w-full max-w-[48rem]">
        <Input label="Rechercher un livre" value={query} onChange={e => setQuery(e.target.value)} className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              searchBooks();
            }
          }} />
        {!books ? ('Aucun livre') : (
          <div className="mt-6 max-h-[calc(100vh-280px)]">
            {books.map(book => (
              <div key={book.id}>
                <Card className="mt-6 w-full">
                  <CardBody>

                    <div className="mb-3 flex items-center justify-between">
                      <Typography variant="h5" color="blue-gray" className="font-medium">
                        {book.volumeInfo.title ? (
                          book.volumeInfo.title.length > 200
                            ? `${book.volumeInfo.title.substring(0, 200)}...`
                            : book.volumeInfo.title
                        ) : (
                          'Aucune title disponible'
                        )
                          
                        }
                      </Typography>
                      <Typography
                        color="black"
                        className="flex items-center gap-1.5 text-xs"
                      >
                        {book.volumeInfo.authors}
                      </Typography>
                    </div>
                    <Typography>
                      {book.volumeInfo.description ? (
                        book.volumeInfo.description.length > 200
                          ? `${book.volumeInfo.description.substring(0, 200)}...`
                          : book.volumeInfo.description
                      ) : (
                        'Aucune description disponible'
                      )}
                    </Typography>
                  </CardBody>
                 
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

