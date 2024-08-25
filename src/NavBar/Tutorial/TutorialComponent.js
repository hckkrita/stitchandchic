import React from 'react'
import TutorialCards from './TutorialCard';

const TutorialComponent = () => {
    const CrochetBasics = [
        {
          imgUrl: "https://kristitullus.com/cdn/shop/files/Untitled_design_13.jpg?v=1649574184&width=550",
          title: "Yarn Weight Comparison Chart",
          description: "There are many ways to represent the yarn weight, so here is a chart that will help you find the right yarn for any project.",
        },
        {
          imgUrl: "https://kristitullus.com/cdn/shop/files/Untitled_design_14.jpg?v=1649574365&width=550",
          title: "Crochet Terms Comparison Chart",
          description: "I put together a small comparison chart with most common US and UK / Europe / AU crochet terms in English and Estonian.Organize your beauty essentials with a chic crochet makeup pouch.",
        },
        {
          imgUrl: "https://kristitullus.com/cdn/shop/files/Untitled_design_15.jpg?v=1649574867&width=550",
          title: "Crochet Hook Comparison Chart",
          description: "I put together a little comparison chart based on the sizing of the most common crochet hook brands.",
        },
        {
            imgUrl: "https://kristitullus.com/cdn/shop/files/IMGP7054_2.jpg?v=1649664976&width=550",
            title: "Parts of a Crochet Stitch",
            description: "In this post I will talk a little about the parts of a crochet stitch and different ways you can insert your hook through a stitch.",
        },
        {
            imgUrl: "https://kristitullus.com/cdn/shop/files/IMGP9323.jpg?v=1643792812&width=550",
            title: "Crocheting into Base Chain",
            description: "Crocheting into the loops or 'bumps' on the back of a starting chain. Doing this will leave a nice even row of loops along the bottom edge."
        },
        {
            imgUrl: "https://kristitullus.com/cdn/shop/files/Untitled_design_16.jpg?v=1649665484&width=550",
            title: "Basic Crochet Stitches",
            description: "A little video showing you how to do the basic crochet stitches and what they look like."
        }

    ]
    const AmigurumiEssentials=[
        {
            imgUrl: "https://kristitullus.com/cdn/shop/files/BL_IMGP9234.jpg?v=1641752626&width=550",
            title: "Magic Ring",
            description: "Start crocheting in round with an adjustable loop and then pull the loop tightly closed."
        },
        {
            imgUrl: "https://kristitullus.com/cdn/shop/files/BL_IMGP8595_e0962d70-7215-4b4a-bb95-e418b3066d2d.jpg?v=1649665955&width=550",
            title: "Crocheting in Spiral",
            description: "Crocheting in spiral is the basis of amigurumi making - unlike crocheting in rounds, this creates a nice even fabric without a seam where the round ends."
        },
        {
            imgUrl: "https://kristitullus.com/cdn/shop/files/BL_IMGP8599_c7be8fe5-efbc-4be5-9bba-29c5fde351e9.jpg?v=1649666006&width=550",
            title: "Increasing",
            description: "Amigurumi is usually crocheted with just one stitch - single crochet stitch and increasing and decreasing are used to give shape to your toys."
        }
    ]



    return(
        <>
           <h1 className='text-center text-3xl my-6 font-bold font-serif'>Crochet Basics</h1>
           <TutorialCards tutorials={CrochetBasics} />
           <h1 className='text-center text-3xl my-6 font-bold'>Amigurumi Essentials</h1>
            <TutorialCards tutorials={AmigurumiEssentials} />
        </>
    )
}

export default TutorialComponent;