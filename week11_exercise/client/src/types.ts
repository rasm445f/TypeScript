  type Book = {
    id: string;
    title: string;
    author: string;
    rating_average: number;
    url: string;
    description: string;
    category: Category;
  }
  
  type Category = {
    id: string;
    name: string;
    books: Book[];
  }

  type Theme = {
    isDark: boolean;
    black: {
        backgroundColor: string
        color: string
    };
    white: {
        backgroundColor: string
        color: string
    };
  }

  type User = {
      isLoggedin: boolean;
      email: string;
      password: string;
      roles:{
          role: string
      }
  }
export type {Book, Category, Theme, User}