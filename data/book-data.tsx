export interface Ibook {
  id: string;
  title: string;
  isbn?: string;
  pageCount: number;
  publishedDate: {
    $date: string;
  };
  thumbnailUrl: string;
  shortDescription?: string;
  longDescription?: string;
  description?: string;
  status: string;
  authors: Array<string>;
  categories: Array<string>;
}

export const BOOKS: Ibook[] = [
  {
    id: "1",
    title: "Unlocking Android",
    isbn: "1933988673",
    pageCount: 416,
    publishedDate: {
      $date: "2009-04-01T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
    description:
      "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices.",
    status: "PUBLISH",
    authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
    categories: ["Open Source", "Mobile"],
  },
  {
    id: "2",
    title: "Android in Action, Second Edition",
    isbn: "1935182722",
    pageCount: 592,
    publishedDate: {
      $date: "2011-01-14T00:00:00.000-0800",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
    description:
      "When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets.",
    status: "PUBLISH",
    authors: ["W. Frank Ableson", "Robi Sen"],
    categories: ["Java"],
  },
  {
    id: "3",
    title: "Specification by Example",
    isbn: "1617290084",
    pageCount: 0,
    publishedDate: {
      $date: "2011-06-03T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
    description:
      "When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets.",
    status: "PUBLISH",
    authors: ["Gojko Adzic"],
    categories: ["Software Engineering"],
  },
  {
    id: "4",
    title: "Flex 3 in Action",
    isbn: "1933988746",
    pageCount: 576,
    publishedDate: {
      $date: "2009-02-02T00:00:00.000-0800",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
    description:
      "New web applications require engaging user-friendly interfaces and the cooler, the better. With Flex 3, web developers at any skill level can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily.",
    status: "PUBLISH",
    authors: ["Tariq Ahmed with Jon Hirschi", "Faisal Abid"],
    categories: ["Internet"],
  },
  {
    id: "5",
    title: "Camel in Action",
    isbn: "1935182366",
    pageCount: 375,
    publishedDate: {
      $date: "2011-01-04T00:00:00.000-0800",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ibsen.jpg",
    description:
      "Camel in Action is for developers working with integration of any kind. This highly practical book introduces Camel and shows examples of how to use it with the 45+ supported enterprise integration patterns.",
    status: "PUBLISH",
    authors: ["Claus Ibsen", "Jonathan Anstey"],
    categories: ["Java"],
  },
  {
    id: "6",
    title: "Taming Text",
    isbn: "193398838X",
    pageCount: 350,
    publishedDate: {
      $date: "2012-12-31T00:00:00.000-0800",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ingersoll.jpg",
    description:
      "It is no secret that the world is drowning in text and data. This causes real problems for everyday users who need to make sense of all the information available, and software engineers who want to make their text-based applications more useful and user-friendly.",
    status: "PUBLISH",
    authors: ["Grant S. Ingersoll", "Thomas S. Morton", "", "Andrew L. Farris"],
    categories: ["Software Engineering"],
  },
  {
    id: "7",
    title: "JBoss in Action",
    isbn: "1933988029",
    pageCount: 496,
    publishedDate: {
      $date: "2009-01-01T00:00:00.000-0800",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jamae.jpg",
    description:
      "The JBoss 5 Application Server is a Java Enterprise Edition 5 application server that provides services that most enterprise applications need, such as security, transactionality, persistence, monitoring, resource management, and remote access.",
    status: "PUBLISH",
    authors: ["Javid Jamae", "Peter Johnson"],
    categories: ["Java"],
  },
  {
    id: "8",
    title: "Gnuplot in Action",
    isbn: "1933988398",
    pageCount: 400,
    publishedDate: {
      $date: "2009-08-01T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/janert.jpg",
    description:
      "Gnuplot is the most widely used program to plot and visualize data for Unix/Linux systems and it is also popular for Windows and the Mac.",
    status: "PUBLISH",
    authors: ["Philipp K. Janert"],
    categories: ["Computer Graphics"],
  },
  {
    id: "9",
    title: "Extending and Embedding Perl",
    isbn: "1930110820",
    pageCount: 384,
    publishedDate: {
      $date: "2002-08-01T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jenness.jpg",
    description:
      "Extending and Embedding Perl explains how to expand the functionality and usefulness of the Perl programming language and how to use Perl from C programs.",
    status: "PUBLISH",
    authors: ["Tim Jenness", "Simon Cozens"],
    categories: ["Perl"],
  },
  {
    id: "10",
    title: "iOS 4 in Action",
    isbn: "1617290017",
    pageCount: 504,
    publishedDate: {
      $date: "2011-06-09T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jharrington.jpg",
    description:
      "Written for Xcode 4, iOS 4 in Action guides you from setting up your development environment, through coding your first app, all the way to selling in the App Store.",
    status: "PUBLISH",
    authors: [
      "Jocelyn Harrington",
      "Brandon Trebitowski",
      "Christopher Allen",
      "",
      "Shannon Appelcline",
    ],
    categories: ["Mobile Technology"],
  },
  {
    id: "11",
    title: "Elements of Programming with Perl",
    isbn: "1884777805",
    pageCount: 368,
    publishedDate: {
      $date: "1999-10-01T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/johnson.jpg",
    description:
      'As the complexity of web sites grows, more and more webmasters need to acquire programming skills. Naturally, such persons are inclined to learn Perl, the "language of the web.',
    status: "PUBLISH",
    authors: ["Andrew L. Johnson"],
    categories: ["Perl"],
  },
  {
    id: "12",
    title: "Learn Windows PowerShell in a Month of Lunches",
    isbn: "1617290211",
    pageCount: 0,
    publishedDate: {
      $date: "2011-04-15T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones.jpg",
    description:
      "In Windows, there's a control panel, dialog box, administrative console, API, or wizard to manage every component of your system. There are thousands of them so many that it can be nearly impossible to keep track of all the locations and settings you need to administer Windows effectively.",
    status: "PUBLISH",
    authors: ["Don Jones"],
    categories: ["Microsoft .NET"],
  },
  {
    id: "13",
    title: "R in Action",
    isbn: "1935182390",
    pageCount: 375,
    publishedDate: {
      $date: "2011-08-15T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kabacoff.jpg",
    description:
      "The ability to interpret and act on the massive amounts of information locked in web and enterprise systems is critical to success in the modern business economy.",
    status: "PUBLISH",
    authors: ["Robert I. Kabacoff"],
    categories: ["Software Engineering"],
  },
  {
    id: "14",
    title: "Android in Practice",
    isbn: "9781935182924",
    pageCount: 0,
    publishedDate: {
      $date: "2011-08-15T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
    description:
      "R in Action is the first book to present both the R system and the use cases that make it such a compelling package for business developers.",
    status: "MEAP",
    authors: ["Matthias Kaeppler", "Michael D. Galpin", "Charlie Collins"],
    categories: ["Mobile Technology"],
  },

  {
    id: "15",
    title: "The Cloud at Your Service",
    isbn: "1935182528",
    pageCount: 200,
    publishedDate: {
      $date: "2010-11-22T00:00:00.000-0800",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rosenberg.jpg",
    description:
      "R, a free software environment for statistical computing and graphics, is a comprehensive, fully-programmable package that empowers developers and analysts to capture, process, and respond intelligently to statistical information.",
    status: "PUBLISH",
    authors: ["Jothy Rosenberg", "Arthur Mateos"],
    categories: ["Internet"],
  },
  {
    id: "16",
    title: "Implementing Elliptic Curve Cryptography",
    isbn: "1884777694",
    pageCount: 330,
    publishedDate: {
      $date: "1998-11-01T00:00:00.000-0800",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rosing.jpg",
    description:
      "Implementing Elliptic Curve Cryptography proceeds step-by-step to explain basic number theory, polynomial mathematics, normal basis mathematics and elliptic curve mathematics. With these in place, applications to cryptography are introduced.",
    status: "PUBLISH",
    authors: ["Michael Rosing"],
    categories: ["Theory"],
  },
];
