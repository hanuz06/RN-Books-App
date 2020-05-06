interface Ibook {
  id: number;
  title: String;
  isbn?: String;
  pageCount: Number;
  publishedDate: {
    $date: String;
  };
  thumbnailUrl: String;
  shortDescription: String;
  longDescription: String;
  status: String;
  authors: Array<string>;
  categories: Array<string>;
}

const BOOKS: Ibook[] = [
  {
    id: 1,
    title: "Unlocking Android",
    isbn: "1933988673",
    pageCount: 416,
    publishedDate: {
      $date: "2009-04-01T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
    shortDescription:
      "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools.",
    longDescription:
      "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.",
    status: "PUBLISH",
    authors: ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
    categories: ["Open Source", "Mobile"],
  },
  {
    id: 2,
    title: "Android in Action, Second Edition",
    isbn: "1935182722",
    pageCount: 592,
    publishedDate: {
      $date: "2011-01-14T00:00:00.000-0800",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
    shortDescription:
      'Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond "Hello Android," this fast-paced book puts you in the driver\'s seat as you learn important architectural concepts and implementation strategies. ',
    longDescription:
      "When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.    Android in Action, Second Edition is a comprehensive tutorial for Android developers.",
    status: "PUBLISH",
    authors: ["W. Frank Ableson", "Robi Sen"],
    categories: ["Java"],
  },
  {
    id: 3,
    title: "Specification by Example",
    isbn: "1617290084",
    pageCount: 0,
    publishedDate: {
      $date: "2011-06-03T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
    shortDescription:
      'Taking you far beyond "Hello Android," this fast-paced book puts you in the driver\'s seat as you learn important architectural concepts and implementation strategies. ',
    longDescription:
      "When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.    Android in Action, Second Edition is a comprehensive tutorial for Android developers.",
    status: "PUBLISH",
    authors: ["Gojko Adzic"],
    categories: ["Software Engineering"],
  },
  {
    id: 4,
    title: "Flex 3 in Action",
    isbn: "1933988746",
    pageCount: 576,
    publishedDate: {
      $date: "2009-02-02T00:00:00.000-0800",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
    shortDescription:
      "New web applications require engaging user-friendly interfaces   and the cooler, the better. With Flex 3, web developers at any skill level can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily.",
    longDescription:
      "Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And now that the major components of Flex are free and open-source, the cost barrier is gone, as well!    Flex 3 in Action is an easy-to-follow, hands-on Flex tutorial.",
    status: "PUBLISH",
    authors: ["Tariq Ahmed with Jon Hirschi", "Faisal Abid"],
    categories: ["Internet"],
  },
  {
    id: 5,
    title: "Camel in Action",
    isbn: "1935182366",
    pageCount: 375,
    publishedDate: {
      $date: "2011-01-04T00:00:00.000-0800",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ibsen.jpg",
    shortDescription:
      "Camel in Action is for developers working with integration of any kind. This highly practical book introduces Camel and shows examples of how to use it with the 45+ supported enterprise integration patterns.",
    longDescription:
      "Apache Camel is a Java-based toolkit that makes it easy to implement services based on standard enterprise integration patterns (EIP). Through a concise, but sophisticated domain specific language (DSL), you can build integration logic in lego style. The Camel DSL is implemented in a range of standard programming languages such as Java, XML, Scala, Groovy, Ruby, and Python.",
    status: "PUBLISH",
    authors: ["Claus Ibsen", "Jonathan Anstey"],
    categories: ["Java"],
  },
  {
    id: 6,
    title: "Taming Text",
    isbn: "193398838X",
    pageCount: 350,
    publishedDate: {
      $date: "2012-12-31T00:00:00.000-0800",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ingersoll.jpg",
    shortDescription:
      "Taming Text is a hands-on, example-driven guide to working with unstructured text in the context of real-world applications.",
    longDescription:
      "It is no secret that the world is drowning in text and data. This causes real problems for everyday users who need to make sense of all the information available, and software engineers who want to make their text-based applications more useful and user-friendly. Whether you're building a search engine for a corporate website, automatically organizing email, or extracting important nuggets of information from the news, dealing with unstructured text can be a daunting task.",
    status: "PUBLISH",
    authors: ["Grant S. Ingersoll", "Thomas S. Morton", "", "Andrew L. Farris"],
    categories: ["Software Engineering"],
  },
  {
    id: 7,
    title: "JBoss in Action",
    isbn: "1933988029",
    pageCount: 496,
    publishedDate: {
      $date: "2009-01-01T00:00:00.000-0800",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jamae.jpg",
    shortDescription:
      "JBoss in Action teaches readers how to use the JBoss application server, digging into the things that separate JBoss from other Java EE servers.",
    longDescription:
      "The JBoss 5 Application Server is a Java Enterprise Edition 5 application server that provides services that most enterprise applications need, such as security, transactionality, persistence, monitoring, resource management, and remote access. JBoss 5 Application Server is compliant with the specification defined by the Java Community Process. ",
    status: "PUBLISH",
    authors: ["Javid Jamae", "Peter Johnson"],
    categories: ["Java"],
  },
  {
    id: 8,
    title: "Gnuplot in Action",
    isbn: "1933988398",
    pageCount: 400,
    publishedDate: {
      $date: "2009-08-01T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/janert.jpg",
    shortDescription:
      "Statistical data is only as valuable as your ability to analyze, interpret, and present it in a meaningful way. ",
    longDescription:
      "Gnuplot is the most widely used program to plot and visualize data for Unix/Linux systems and it is also popular for Windows and the Mac. It's open-source (as in free!), actively maintained, stable, and mature. It can deal with arbitrarily large data sets and is capable of producing high-quality, publication-ready graphics.",
    status: "PUBLISH",
    authors: ["Philipp K. Janert"],
    categories: ["Computer Graphics"],
  },
  {
    id: 9,
    title: "Extending and Embedding Perl",
    isbn: "1930110820",
    pageCount: 384,
    publishedDate: {
      $date: "2002-08-01T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jenness.jpg",
    shortDescription:
      "Statistical data is only as valuable as your ability to analyze, interpret, and present it in a meaningful way. ",
    longDescription:
      "Extending and Embedding Perl explains how to expand the functionality and usefulness of the Perl programming language and how to use Perl from C programs. It begins simply but also covers complex issues using real code examples from the Perl source. The book discusses how to write interfaces to C libraries (as well as C++ and Fortran libraries).",
    status: "PUBLISH",
    authors: ["Tim Jenness", "Simon Cozens"],
    categories: ["Perl"],
  },
  {
    id: 10,
    title: "iOS 4 in Action",
    isbn: "1617290017",
    pageCount: 504,
    publishedDate: {
      $date: "2011-06-09T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jharrington.jpg",
    shortDescription:
      "iOS 4 in Action, written for Xcode 4, is a detailed, hands-on guide that goes from setting up your development environment, through your first coding steps, all the way to creating a polished, commercial iOS 4 application. ",
    longDescription:
      "Written for Xcode 4, iOS 4 in Action guides you from setting up your development environment, through coding your first app, all the way to selling in the App Store. Work through sample applications including a chat client, a video game, an interactive map, background audio, and more as you explore the iOS 4 SDK.    ",
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
    id: 11,
    title: "Elements of Programming with Perl",
    isbn: "1884777805",
    pageCount: 368,
    publishedDate: {
      $date: "1999-10-01T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/johnson.jpg",
    shortDescription:
      "Statistical data is only as valuable as your ability to analyze, interpret, and present it in a meaningful way. ",
    longDescription:
      'As the complexity of web sites grows, more and more webmasters need to acquire programming skills. Naturally, such persons are inclined to learn Perl, the "language of the web." However, there has been no book to treat Perl as the first programming language; every Perl book assumes that the reader can program already.    Until now.    Elements of Programming with Perl is a general introduction to programming, using Perl as the implementation language. ',
    status: "PUBLISH",
    authors: ["Andrew L. Johnson"],
    categories: ["Perl"],
  },
  {
    id: 12,
    title: "Learn Windows PowerShell in a Month of Lunches",
    isbn: "1617290211",
    pageCount: 0,
    publishedDate: {
      $date: "2011-04-15T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones.jpg",
    shortDescription:
      "Learn Windows PowerShell in a Month of Lunches is an innovative tutorial designed for busy administrators. Author Don Jones has taught thousands of administrators to use PowerShell, and now he'll teach you, bringing his years of training techniques to a concise, easy-to-follow book.",
    longDescription:
      "In Windows, there's a control panel, dialog box, administrative console, API, or wizard to manage every component of your system. There are    thousands    of them   so many that it can be nearly impossible to keep track of all the locations and settings you need to administer Windows effectively. For administrators, PowerShell is a godsend because it provides a single, unified command line from which you can control and automate every aspect of Windows. ",
    status: "PUBLISH",
    authors: ["Don Jones"],
    categories: ["Microsoft .NET"],
  },
  {
    id: 13,
    title: "R in Action",
    isbn: "1935182390",
    pageCount: 375,
    publishedDate: {
      $date: "2011-08-15T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kabacoff.jpg",
    shortDescription:
      "R in Action is the first book to present both the R system and the use cases that make it such a compelling package for business developers. The book begins by introducing the R language, including the development environment. ",
    longDescription:
      "The ability to interpret and act on the massive amounts of information locked in web and enterprise systems is critical to success in the modern business economy. R, a free software environment for statistical computing and graphics, is a comprehensive, fully-programmable package that empowers developers and analysts to capture, process, and respond intelligently to statistical information. It consists of the interpreted R language plus a run-time environment with graphics, a debugger, and the ability to run programs stored in script files.",
    status: "PUBLISH",
    authors: ["Robert I. Kabacoff"],
    categories: ["Software Engineering"],
  },
  {
    id: 14,
    title: "Android in Practice",
    isbn: "9781935182924",
    pageCount: 0,
    publishedDate: {
      $date: "2011-08-15T00:00:00.000-0700",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kaeppler.jpg",
    shortDescription:
      "R in Action is the first book to present both the R system and the use cases that make it such a compelling package for business developers. The book begins by introducing the R language, including the development environment. ",
    longDescription:
      "The ability to interpret and act on the massive amounts of information locked in web and enterprise systems is critical to success in the modern business economy. R, a free software environment for statistical computing and graphics, is a comprehensive, fully-programmable package that empowers developers and analysts to capture, process, and respond intelligently to statistical information. It consists of the interpreted R language plus a run-time environment with graphics, a debugger, and the ability to run programs stored in script files.",
    status: "MEAP",
    authors: ["Matthias Kaeppler", "Michael D. Galpin", "Charlie Collins"],
    categories: ["Mobile Technology"],
  },

  {
    id: 15,
    title: "The Cloud at Your Service",
    isbn: "1935182528",
    pageCount: 200,
    publishedDate: {
      $date: "2010-11-22T00:00:00.000-0800",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rosenberg.jpg",
    shortDescription:
      "R in Action is the first book to present both the R system and the use cases that make it such a compelling package for business developers. The book begins by introducing the R language, including the development environment. ",
    longDescription:
      "The ability to interpret and act on the massive amounts of information locked in web and enterprise systems is critical to success in the modern business economy. R, a free software environment for statistical computing and graphics, is a comprehensive, fully-programmable package that empowers developers and analysts to capture, process, and respond intelligently to statistical information. It consists of the interpreted R language plus a run-time environment with graphics, a debugger, and the ability to run programs stored in script files.",
    status: "PUBLISH",
    authors: ["Jothy Rosenberg", "Arthur Mateos"],
    categories: ["Internet"],
  },
  {
    id: 16,
    title: "Implementing Elliptic Curve Cryptography",
    isbn: "1884777694",
    pageCount: 330,
    publishedDate: {
      $date: "1998-11-01T00:00:00.000-0800",
    },
    thumbnailUrl:
      "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rosing.jpg",
    shortDescription:
      '"The book provides all the theory and working programs needed to create real applications based on the latest IEEE P1363 standard."  --Reviewed in Cryptologia',
    longDescription:
      "Implementing Elliptic Curve Cryptography proceeds step-by-step to explain basic number theory, polynomial mathematics, normal basis mathematics and elliptic curve mathematics. With these in place, applications to cryptography are introduced. The book is filled with C code to illustrate how mathematics is put into a computer, and the last several chapters show how to implement several cryptographic protocols.",
    status: "PUBLISH",
    authors: ["Michael Rosing"],
    categories: ["Theory"],
  },
];

export default BOOKS;
