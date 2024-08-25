import React from 'react';
import { useParams } from 'react-router-dom';
import TimerComponent from '../../extras/timer';
import Counter from '../../extras/counter';

const patterns = [
  // Example pattern data
  {
    id: '0',
    title: 'Amigurumi Bunny',
    imgUrl: 'https://i.pinimg.com/564x/31/16/34/311634c26a0c28e3ed8247061a4cedc8.jpg',
    description: "Amigurumi Bunnys are so quick and easy to crochet, although the small details can be a bit fiddly to make. So, if you don't enjoy working on small details, you may want to skip this one.",
    materials: [
      'Yarn',
      '2,50 - 3,00 mm crochet hook (US size 2/C - 3/D).',
      'Polyester fiberfill, wool, wadding etc. for stuffing.',
      '8 mm (1/3") safety eyes or buttons, beads, felt etc.',
      'Cotton embroidery floss.',
      'Yarn needle, scissors, stitch marker.'
    ],
    steps: [
    {
      title: 'HEAD',
      subSteps: [
        'mr, sc 6 = [6]',
        'inc x 6 = [12]',
        '(sc, inc) x 6 = [18]',
        '(inc, sc 2) x 6 = [24]',
        '(sc 5, inc) x 4 = [28]',
        'sc 2, inc, (sc 6, inc) x 3, sc 4 = [32]',
        'sc in each stitch = [32]',
        'sc 2, dec, (sc 6, dec) x 3, sc 4 = [28]',
        '(sc 5, dec) x 4 = [24]',
        'Attach safety eyes between rounds 10 and 11, leaving 8 stitches (count 7 holes) between them.',
        'Start stuffing the head. Keep adding a bit of fiberfill after every few rounds, stuffing the head firmly.',
        '(dec, sc 2) x 6 = [18]',
        '(sc, dec) x 6 = [12]',
        'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Stuff the head firmly. Embroider the nose.',
        'Tip! Sew the ears to the head, embroider the nose and add any embellishments before you sew the head to the body - this way you can fasten all yarn tails securely with a knot under the head.'
      ]
    },
    {
      title: 'STRAIGHT EARS',
      subSteps: [
        'mr, sc 6 = [6]',
        '(inc, sc) x 3 = [9]',
        '(sc 2, inc) x 3 = [12]',
        'sc in each stitch = [12]',
        '(dec, sc 4) x 2 = [10]',
        'sc in each stitch = [10]',
        '(dec, sc 3) x 2 = [8]',
        'sc in each stitch = [8]',
        '(dec, sc 2) x 2 = [6]',
        'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Do not stuff the ears. Flatten the ears and sew them to the head, placing them just below round 3.'
      ]
    },
    {
      title: 'FLOPPY EARS',
      subSteps: [
        'mr, sc 6 = [6]',
        'inc x 6 = [12]',
        '(sc, inc) x 6 = [18]',
        '(sc 3, inc, sc 4, inc) x 2 = [22]',
        'sc in each stitch = [22]',
        '(dec, sc 9) x 2 = [20]',
        'sc in each stitch = [20]',
        '(dec, sc 8) x 2 = [18]',
        'sc in each stitch = [18]',
        '(dec, sc 7) x 2 = [16]',
        'sc in each stitch = [16]',
        '(dec, sc 6) x 2 = [14]',
        'sc in each stitch = [14]',
        '(dec, sc 5) x 2 =[12]',
        'sc, flatten the ear and sc through both layers.',
        'Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Sew the ears to the head, placing them just below round 6.'
      ]
    },
    {
      title: 'BODY',
      subSteps: [
        'mr, sc 6 = [6]', 
        'inc x 6 = [12]', 
        '(sc, inc) x 6 = [18]', 
        'sc in each stitch = [18]',
        '(sc, dec) x 6 = [12]',
        'Sl st in next stitch. Fasten off and hide the yarn tail. Stuff the body firmly. Sew the head to the body. Add a bit more stuffing before closing the seam.'
      ]
    },
    {
      title: 'ARMS AND LEGS',
      subSteps: [
        'mr, sc 6 = [6]', 
        '(inc, sc) x 3 = [9]', 
        'sc in each stitch = [9]',
        'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Stuff the arms and legs firmly.',
        'Sew the arms to the sides of the body, placing them one row below the head, and the legs just above round 2 and a bit more towards the front of the body. Finish sewing and hide all yarn tails.'
      ]
    }
  ]
  },

  // totoro
  {
    id: '1',
    title: 'Amigurumi Totoro',
    imgUrl: 'https://i.pinimg.com/564x/3c/b9/9d/3cb99d52d6e5e0a1e5aec092b1f05370.jpg',
    description: 'Totoro is such an adorable and recognisable character, and he’s the perfect project for amigurumi! This Totoro crochet pattern is built up of simple shapes so he’s a great beginner project. ',
    materials: [
      '3.00mm crochet hook',
      '2 x 10mm black safety eyes',
      'White felt',
      'White yarn',
      'Grey yarn',
      'Black yarn',
      'polyester fiberfil, or some other kind of stuffing'
    ],
    steps: [
      {
        title: 'HEAD',
        subSteps: [
          'mr, sc 6 = [6]',
          'inc x 6 = [12]',
          '(sc, inc) x 6 = [18]',
          '(inc, sc 2) x 6 = [24]',
          '(sc 5, inc) x 4 = [28]',
          'sc 2, inc, (sc 6, inc) x 3, sc 4 = [32]',
          'sc in each stitch = [32]',
          'sc 2, dec, (sc 6, dec) x 3, sc 4 = [28]',
          '(sc 5, dec) x 4 = [24]',
          'Attach safety eyes between rounds 10 and 11, leaving 8 stitches (count 7 holes) between them.',
          'Start stuffing the head. Keep adding a bit of fiberfill after every few rounds, stuffing the head firmly.',
          '(dec, sc 2) x 6 = [18]',
          '(sc, dec) x 6 = [12]',
          'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Stuff the head firmly. Embroider the nose.',
          'Tip! Sew the ears to the head, embroider the nose and add any embellishments before you sew the head to the body - this way you can fasten all yarn tails securely with a knot under the head.'
        ]
      },
      {
        title: 'STRAIGHT EARS',
        subSteps: [
          'mr, sc 6 = [6]',
          '(inc, sc) x 3 = [9]',
          '(sc 2, inc) x 3 = [12]',
          'sc in each stitch = [12]',
          '(dec, sc 4) x 2 = [10]',
          'sc in each stitch = [10]',
          '(dec, sc 3) x 2 = [8]',
          'sc in each stitch = [8]',
          '(dec, sc 2) x 2 = [6]',
          'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Do not stuff the ears. Flatten the ears and sew them to the head, placing them just below round 3.'
        ]
      },
      {
        title: 'FLOPPY EARS',
        subSteps: [
          'mr, sc 6 = [6]',
          'inc x 6 = [12]',
          '(sc, inc) x 6 = [18]',
          '(sc 3, inc, sc 4, inc) x 2 = [22]',
          'sc in each stitch = [22]',
          '(dec, sc 9) x 2 = [20]',
          'sc in each stitch = [20]',
          '(dec, sc 8) x 2 = [18]',
          'sc in each stitch = [18]',
          '(dec, sc 7) x 2 = [16]',
          'sc in each stitch = [16]',
          '(dec, sc 6) x 2 = [14]',
          'sc in each stitch = [14]',
          '(dec, sc 5) x 2 =[12]',
          'sc, flatten the ear and sc through both layers.',
          'Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Sew the ears to the head, placing them just below round 6.'
        ]
      },
      {
        title: 'BODY',
        subSteps: [
          'mr, sc 6 = [6]', 
          'inc x 6 = [12]', 
          '(sc, inc) x 6 = [18]', 
          'sc in each stitch = [18]',
          '(sc, dec) x 6 = [12]',
          'Sl st in next stitch. Fasten off and hide the yarn tail. Stuff the body firmly. Sew the head to the body. Add a bit more stuffing before closing the seam.'
        ]
      },
      {
        title: 'ARMS AND LEGS',
        subSteps: [
          'mr, sc 6 = [6]', 
          '(inc, sc) x 3 = [9]', 
          'sc in each stitch = [9]',
          'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Stuff the arms and legs firmly.',
          'Sew the arms to the sides of the body, placing them one row below the head, and the legs just above round 2 and a bit more towards the front of the body. Finish sewing and hide all yarn tails.'
        ]
      }
    ]
  },

  // cinnamone roll
  {
    id: '2',
    title: 'Amigurumi Cinnamon Roll',
    imgUrl: 'https://i.pinimg.com/736x/34/80/62/348062ba9b2066ac4fa1a2fad38ed3b1.jpg',
    description: 'Cinnamoroll is a popular character created by Sanrio, a Japanese company famous for creating iconic fictional characters like Hello Kitty and My Melody.',
    materials: [
      '3.00mm crochet hook',
      '2 x 10mm black safety eyes',
      'White felt',
      'White yarn',
      'Grey yarn',
      'Black yarn',
      'polyester fiberfil, or some other kind of stuffing'
    ],
    steps: [
      {
        title: 'HEAD',
        subSteps: [
          'mr, sc 6 = [6]',
          'inc x 6 = [12]',
          '(sc, inc) x 6 = [18]',
          '(inc, sc 2) x 6 = [24]',
          '(sc 5, inc) x 4 = [28]',
          'sc 2, inc, (sc 6, inc) x 3, sc 4 = [32]',
          'sc in each stitch = [32]',
          'sc 2, dec, (sc 6, dec) x 3, sc 4 = [28]',
          '(sc 5, dec) x 4 = [24]',
          'Attach safety eyes between rounds 10 and 11, leaving 8 stitches (count 7 holes) between them.',
          'Start stuffing the head. Keep adding a bit of fiberfill after every few rounds, stuffing the head firmly.',
          '(dec, sc 2) x 6 = [18]',
          '(sc, dec) x 6 = [12]',
          'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Stuff the head firmly. Embroider the nose.',
          'Tip! Sew the ears to the head, embroider the nose and add any embellishments before you sew the head to the body - this way you can fasten all yarn tails securely with a knot under the head.'
        ]
      },
      {
        title: 'STRAIGHT EARS',
        subSteps: [
          'mr, sc 6 = [6]',
          '(inc, sc) x 3 = [9]',
          '(sc 2, inc) x 3 = [12]',
          'sc in each stitch = [12]',
          '(dec, sc 4) x 2 = [10]',
          'sc in each stitch = [10]',
          '(dec, sc 3) x 2 = [8]',
          'sc in each stitch = [8]',
          '(dec, sc 2) x 2 = [6]',
          'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Do not stuff the ears. Flatten the ears and sew them to the head, placing them just below round 3.'
        ]
      },
      {
        title: 'FLOPPY EARS',
        subSteps: [
          'mr, sc 6 = [6]',
          'inc x 6 = [12]',
          '(sc, inc) x 6 = [18]',
          '(sc 3, inc, sc 4, inc) x 2 = [22]',
          'sc in each stitch = [22]',
          '(dec, sc 9) x 2 = [20]',
          'sc in each stitch = [20]',
          '(dec, sc 8) x 2 = [18]',
          'sc in each stitch = [18]',
          '(dec, sc 7) x 2 = [16]',
          'sc in each stitch = [16]',
          '(dec, sc 6) x 2 = [14]',
          'sc in each stitch = [14]',
          '(dec, sc 5) x 2 =[12]',
          'sc, flatten the ear and sc through both layers.',
          'Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Sew the ears to the head, placing them just below round 6.'
        ]
      },
      {
        title: 'BODY',
        subSteps: [
          'mr, sc 6 = [6]', 
          'inc x 6 = [12]', 
          '(sc, inc) x 6 = [18]', 
          'sc in each stitch = [18]',
          '(sc, dec) x 6 = [12]',
          'Sl st in next stitch. Fasten off and hide the yarn tail. Stuff the body firmly. Sew the head to the body. Add a bit more stuffing before closing the seam.'
        ]
      },
      {
        title: 'ARMS AND LEGS',
        subSteps: [
          'mr, sc 6 = [6]', 
          '(inc, sc) x 3 = [9]', 
          'sc in each stitch = [9]',
          'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Stuff the arms and legs firmly.',
          'Sew the arms to the sides of the body, placing them one row below the head, and the legs just above round 2 and a bit more towards the front of the body. Finish sewing and hide all yarn tails.'
        ]
      }
    ]
  },

  //kuromi
  {
    id: '3',
    title: 'Amigurumi Kuromi',
    imgUrl: 'https://i.pinimg.com/736x/79/df/1a/79df1a70cad64ba93e45c8aaae1f2988.jpg',
    description: 'Totoro is such an adorable and recognisable character, and he’s the perfect project for amigurumi! This Totoro crochet pattern is built up of simple shapes so he’s a great beginner project. ',
    materials: [
      '3.00mm crochet hook',
      '2 x 10mm black safety eyes',
      'White felt',
      'White yarn',
      'Grey yarn',
      'Black yarn',
      'polyester fiberfil, or some other kind of stuffing'
    ],
    steps: [
      {
        title: 'HEAD',
        subSteps: [
          'mr, sc 6 = [6]',
          'inc x 6 = [12]',
          '(sc, inc) x 6 = [18]',
          '(inc, sc 2) x 6 = [24]',
          '(sc 5, inc) x 4 = [28]',
          'sc 2, inc, (sc 6, inc) x 3, sc 4 = [32]',
          'sc in each stitch = [32]',
          'sc 2, dec, (sc 6, dec) x 3, sc 4 = [28]',
          '(sc 5, dec) x 4 = [24]',
          'Attach safety eyes between rounds 10 and 11, leaving 8 stitches (count 7 holes) between them.',
          'Start stuffing the head. Keep adding a bit of fiberfill after every few rounds, stuffing the head firmly.',
          '(dec, sc 2) x 6 = [18]',
          '(sc, dec) x 6 = [12]',
          'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Stuff the head firmly. Embroider the nose.',
          'Tip! Sew the ears to the head, embroider the nose and add any embellishments before you sew the head to the body - this way you can fasten all yarn tails securely with a knot under the head.'
        ]
      },
      {
        title: 'STRAIGHT EARS',
        subSteps: [
          'mr, sc 6 = [6]',
          '(inc, sc) x 3 = [9]',
          '(sc 2, inc) x 3 = [12]',
          'sc in each stitch = [12]',
          '(dec, sc 4) x 2 = [10]',
          'sc in each stitch = [10]',
          '(dec, sc 3) x 2 = [8]',
          'sc in each stitch = [8]',
          '(dec, sc 2) x 2 = [6]',
          'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Do not stuff the ears. Flatten the ears and sew them to the head, placing them just below round 3.'
        ]
      },
      {
        title: 'FLOPPY EARS',
        subSteps: [
          'mr, sc 6 = [6]',
          'inc x 6 = [12]',
          '(sc, inc) x 6 = [18]',
          '(sc 3, inc, sc 4, inc) x 2 = [22]',
          'sc in each stitch = [22]',
          '(dec, sc 9) x 2 = [20]',
          'sc in each stitch = [20]',
          '(dec, sc 8) x 2 = [18]',
          'sc in each stitch = [18]',
          '(dec, sc 7) x 2 = [16]',
          'sc in each stitch = [16]',
          '(dec, sc 6) x 2 = [14]',
          'sc in each stitch = [14]',
          '(dec, sc 5) x 2 =[12]',
          'sc, flatten the ear and sc through both layers.',
          'Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Sew the ears to the head, placing them just below round 6.'
        ]
      },
      {
        title: 'BODY',
        subSteps: [
          'mr, sc 6 = [6]', 
          'inc x 6 = [12]', 
          '(sc, inc) x 6 = [18]', 
          'sc in each stitch = [18]',
          '(sc, dec) x 6 = [12]',
          'Sl st in next stitch. Fasten off and hide the yarn tail. Stuff the body firmly. Sew the head to the body. Add a bit more stuffing before closing the seam.'
        ]
      },
      {
        title: 'ARMS AND LEGS',
        subSteps: [
          'mr, sc 6 = [6]', 
          '(inc, sc) x 3 = [9]', 
          'sc in each stitch = [9]',
          'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Stuff the arms and legs firmly.',
          'Sew the arms to the sides of the body, placing them one row below the head, and the legs just above round 2 and a bit more towards the front of the body. Finish sewing and hide all yarn tails.'
        ]
      }
    ]
  },

  //Chunky dino
  {
    id: '4',
    title: 'Amigurumi Chunky Dino',
    imgUrl: 'https://i.pinimg.com/564x/a6/8d/12/a68d12e5620406aef283ef9c0984249f.jpg',
    description: "This is a crochet pattern to make this super chonky Dino. He's super chubby and cuddly! And you can make him with however many spikes you want! ",
    materials: [
      '3.00mm crochet hook',
      '2 x 10mm black safety eyes',
      'White felt',
      'White yarn',
      'Grey yarn',
      'Black yarn',
      'polyester fiberfil, or some other kind of stuffing'
    ],
    steps: [
      {
        title: 'HEAD',
        subSteps: [
          'mr, sc 6 = [6]',
          'inc x 6 = [12]',
          '(sc, inc) x 6 = [18]',
          '(inc, sc 2) x 6 = [24]',
          '(sc 5, inc) x 4 = [28]',
          'sc 2, inc, (sc 6, inc) x 3, sc 4 = [32]',
          'sc in each stitch = [32]',
          'sc 2, dec, (sc 6, dec) x 3, sc 4 = [28]',
          '(sc 5, dec) x 4 = [24]',
          'Attach safety eyes between rounds 10 and 11, leaving 8 stitches (count 7 holes) between them.',
          'Start stuffing the head. Keep adding a bit of fiberfill after every few rounds, stuffing the head firmly.',
          '(dec, sc 2) x 6 = [18]',
          '(sc, dec) x 6 = [12]',
          'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Stuff the head firmly. Embroider the nose.',
          'Tip! Sew the ears to the head, embroider the nose and add any embellishments before you sew the head to the body - this way you can fasten all yarn tails securely with a knot under the head.'
        ]
      },
      {
        title: 'STRAIGHT EARS',
        subSteps: [
          'mr, sc 6 = [6]',
          '(inc, sc) x 3 = [9]',
          '(sc 2, inc) x 3 = [12]',
          'sc in each stitch = [12]',
          '(dec, sc 4) x 2 = [10]',
          'sc in each stitch = [10]',
          '(dec, sc 3) x 2 = [8]',
          'sc in each stitch = [8]',
          '(dec, sc 2) x 2 = [6]',
          'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Do not stuff the ears. Flatten the ears and sew them to the head, placing them just below round 3.'
        ]
      },
      {
        title: 'FLOPPY EARS',
        subSteps: [
          'mr, sc 6 = [6]',
          'inc x 6 = [12]',
          '(sc, inc) x 6 = [18]',
          '(sc 3, inc, sc 4, inc) x 2 = [22]',
          'sc in each stitch = [22]',
          '(dec, sc 9) x 2 = [20]',
          'sc in each stitch = [20]',
          '(dec, sc 8) x 2 = [18]',
          'sc in each stitch = [18]',
          '(dec, sc 7) x 2 = [16]',
          'sc in each stitch = [16]',
          '(dec, sc 6) x 2 = [14]',
          'sc in each stitch = [14]',
          '(dec, sc 5) x 2 =[12]',
          'sc, flatten the ear and sc through both layers.',
          'Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Sew the ears to the head, placing them just below round 6.'
        ]
      },
      {
        title: 'BODY',
        subSteps: [
          'mr, sc 6 = [6]', 
          'inc x 6 = [12]', 
          '(sc, inc) x 6 = [18]', 
          'sc in each stitch = [18]',
          '(sc, dec) x 6 = [12]',
          'Sl st in next stitch. Fasten off and hide the yarn tail. Stuff the body firmly. Sew the head to the body. Add a bit more stuffing before closing the seam.'
        ]
      },
      {
        title: 'ARMS AND LEGS',
        subSteps: [
          'mr, sc 6 = [6]', 
          '(inc, sc) x 3 = [9]', 
          'sc in each stitch = [9]',
          'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Stuff the arms and legs firmly.',
          'Sew the arms to the sides of the body, placing them one row below the head, and the legs just above round 2 and a bit more towards the front of the body. Finish sewing and hide all yarn tails.'
        ]
      }
    ]
  },

  //clothing-top
   //Chunky dino
   {
    id: '4',
    title: 'Summer Top',
    imgUrl: 'https://i.pinimg.com/564x/7f/fd/5b/7ffd5beabf6fb60e280a7f159be87929.jpg',
    description: "This is a crochet pattern to make this super chonky Dino. He's super chubby and cuddly! And you can make him with however many spikes you want! ",
    materials: [
      '3.00mm crochet hook',
      '2 x 10mm black safety eyes',
      'White felt',
      'White yarn',
      'Grey yarn',
      'Black yarn',
      'polyester fiberfil, or some other kind of stuffing'
    ],
    steps: [
      {
        title: 'HEAD',
        subSteps: [
          'mr, sc 6 = [6]',
          'inc x 6 = [12]',
          '(sc, inc) x 6 = [18]',
          '(inc, sc 2) x 6 = [24]',
          '(sc 5, inc) x 4 = [28]',
          'sc 2, inc, (sc 6, inc) x 3, sc 4 = [32]',
          'sc in each stitch = [32]',
          'sc 2, dec, (sc 6, dec) x 3, sc 4 = [28]',
          '(sc 5, dec) x 4 = [24]',
          'Attach safety eyes between rounds 10 and 11, leaving 8 stitches (count 7 holes) between them.',
          'Start stuffing the head. Keep adding a bit of fiberfill after every few rounds, stuffing the head firmly.',
          '(dec, sc 2) x 6 = [18]',
          '(sc, dec) x 6 = [12]',
          'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Stuff the head firmly. Embroider the nose.',
          'Tip! Sew the ears to the head, embroider the nose and add any embellishments before you sew the head to the body - this way you can fasten all yarn tails securely with a knot under the head.'
        ]
      },
      {
        title: 'STRAIGHT EARS',
        subSteps: [
          'mr, sc 6 = [6]',
          '(inc, sc) x 3 = [9]',
          '(sc 2, inc) x 3 = [12]',
          'sc in each stitch = [12]',
          '(dec, sc 4) x 2 = [10]',
          'sc in each stitch = [10]',
          '(dec, sc 3) x 2 = [8]',
          'sc in each stitch = [8]',
          '(dec, sc 2) x 2 = [6]',
          'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Do not stuff the ears. Flatten the ears and sew them to the head, placing them just below round 3.'
        ]
      },
      {
        title: 'FLOPPY EARS',
        subSteps: [
          'mr, sc 6 = [6]',
          'inc x 6 = [12]',
          '(sc, inc) x 6 = [18]',
          '(sc 3, inc, sc 4, inc) x 2 = [22]',
          'sc in each stitch = [22]',
          '(dec, sc 9) x 2 = [20]',
          'sc in each stitch = [20]',
          '(dec, sc 8) x 2 = [18]',
          'sc in each stitch = [18]',
          '(dec, sc 7) x 2 = [16]',
          'sc in each stitch = [16]',
          '(dec, sc 6) x 2 = [14]',
          'sc in each stitch = [14]',
          '(dec, sc 5) x 2 =[12]',
          'sc, flatten the ear and sc through both layers.',
          'Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Sew the ears to the head, placing them just below round 6.'
        ]
      },
      {
        title: 'BODY',
        subSteps: [
          'mr, sc 6 = [6]', 
          'inc x 6 = [12]', 
          '(sc, inc) x 6 = [18]', 
          'sc in each stitch = [18]',
          '(sc, dec) x 6 = [12]',
          'Sl st in next stitch. Fasten off and hide the yarn tail. Stuff the body firmly. Sew the head to the body. Add a bit more stuffing before closing the seam.'
        ]
      },
      {
        title: 'ARMS AND LEGS',
        subSteps: [
          'mr, sc 6 = [6]', 
          '(inc, sc) x 3 = [9]', 
          'sc in each stitch = [9]',
          'Sl st in next stitch. Cut the yarn, leaving a long yarn tail for sewing, and fasten off. Stuff the arms and legs firmly.',
          'Sew the arms to the sides of the body, placing them one row below the head, and the legs just above round 2 and a bit more towards the front of the body. Finish sewing and hide all yarn tails.'
        ]
      }
    ]
  },

];

const PatternDetail = () => {
  const { id } = useParams();
  const pattern = patterns.find(pattern => pattern.id === id);

  if (!pattern) {
    return <div>Pattern not found</div>;
  }


  return (
    <div className="container mx-auto p-4 font-serif bg-[#FFE7E3] m-8">
      <h1 className="text-4xl font-bold text-center mb-4">Amigurumi: {pattern.title}</h1>
      <div className="flex justify-center h-[550px] mb-8  mt-2">
        <div className="flex flex-col items-center">
          <div className=" bg-white w-60 h-60 my-4 items-center justify-center rounded shadow-md text-center">
            
            <TimerComponent/>
          </div>
          <div className="bg-white w-60 h-60 mb-4  items-center justify-center rounded shadow-md text-center">
            <span className='font-serif  text-3xl font-bold'>Stitch Counter</span>
            <Counter/>
          </div>
        </div>
        <div className="bg-[#FFE7E3] w-[594px] h-[494px] ml-4 my-4 flex items-center justify-center  text-center">
          <img src={pattern.imgUrl} alt={pattern.title} className="object-cover w-full h-full rounded shadow-md" />
        </div>
      </div>
    
      <div className='ml-[300px] mr-8'>
        <div className="mb-8 mt-16">
          <h2 className="text-2xl font-serif font-semibold">Description</h2>
          <p className='font-serif'>{pattern.description}</p>
        </div>
        <div className="mb-8 mt-16">
          <h2 className="text-2xl font-serif font-semibold">Materials</h2>
          <ul className='list-disc ml-[30px] font-serif'>
            {pattern.materials.map((material, index) => (
              <li key={index}>{material}</li>
            ))}
          </ul>
        </div>
        <div className="mb-8 mt-16">
          <h2 className="text-2xl font-serif font-semibold">Steps</h2>
          {pattern.steps.map((step, index) => (
          <div key={index}>
            <h3 className='font-semibold my-2'>{step.title}</h3>
            <ul>
              {step.subSteps.map((subStep, subIndex) => (
                <li key={subIndex}>{subStep}</li>
              ))}
            </ul>
          </div>
      ))}
        </div>
      </div>

    </div>
  );
};

export default PatternDetail;