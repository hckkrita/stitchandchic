import React from 'react'
import { useParams } from 'react-router-dom';
import TutorialDescription from './TutorialDescription';

const TutorialDetail = () => {
    const crochetBasics = [
        {
            id: '0',
            title: "Crochet Terms Comparison Chart",
            description: "I put together a small comparison chart with most common US and UK / Europe / AU crochet terms in English and also in Estonian. When you start reading a pattern, always make sure you know which terms are used. As you can see, some names can describe entirely different stitches.",
            content: (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border">Name</th>
                                <th className="px-4 py-2 border">Ply (UK, NZ, AU)</th>
                                <th className="px-4 py-2 border">Wraps Per Inch</th>
                                <th className="px-4 py-2 border">Gauge 10 cm / 4 in</th>
                                <th className="px-4 py-2 border">Standard Yarn WS</th>
                                <th className="px-4 py-2 border">Crochet Hook (mm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border">Cobweb</td>
                                <td className="px-4 py-2 border">1 ply</td>
                                <td className="px-4 py-2 border">20+ wpi</td>
                                <td className="px-4 py-2 border">36+ stitches</td>
                                <td className="px-4 py-2 border">0: lace</td>
                                <td className="px-4 py-2 border">1.2 – 1.4</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Lace</td>
                                <td className="px-4 py-2 border">2 ply</td>
                                <td className="px-4 py-2 border">18 wpi</td>
                                <td className="px-4 py-2 border">32-34 stitches</td>
                                <td className="px-4 py-2 border">0: lace</td>
                                <td className="px-4 py-2 border">1.4 – 1.6</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Sock / Light Fingering</td>
                                <td className="px-4 py-2 border">3 ply</td>
                                <td className="px-4 py-2 border">16 wpi</td>
                                <td className="px-4 py-2 border">32 stitches</td>
                                <td className="px-4 py-2 border">0: lace</td>
                                <td className="px-4 py-2 border">2.25 – 2.75</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Fingering</td>
                                <td className="px-4 py-2 border">4 ply</td>
                                <td className="px-4 py-2 border">14 wpi</td>
                                <td className="px-4 py-2 border">28 stitches</td>
                                <td className="px-4 py-2 border">1: super fine</td>
                                <td className="px-4 py-2 border">3 – 3.5</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Sport</td>
                                <td className="px-4 py-2 border">5 ply</td>
                                <td className="px-4 py-2 border">12 wpi</td>
                                <td className="px-4 py-2 border">24-26 stitches</td>
                                <td className="px-4 py-2 border">2: fine</td>
                                <td className="px-4 py-2 border">3.5 – 4.5</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">DK</td>
                                <td className="px-4 py-2 border">8 ply</td>
                                <td className="px-4 py-2 border">11 wpi</td>
                                <td className="px-4 py-2 border">22 stitches</td>
                                <td className="px-4 py-2 border">3: light</td>
                                <td className="px-4 py-2 border">4.5 – 5.5</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Worsted / Aran</td>
                                <td className="px-4 py-2 border">10 ply</td>
                                <td className="px-4 py-2 border">8-9 wpi</td>
                                <td className="px-4 py-2 border">20 stitches</td>
                                <td className="px-4 py-2 border">4: medium</td>
                                <td className="px-4 py-2 border">5.5 – 6.5</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Bulky / Chunky</td>
                                <td className="px-4 py-2 border">12 ply</td>
                                <td className="px-4 py-2 border">7 wpi</td>
                                <td className="px-4 py-2 border">14-15 stitches</td>
                                <td className="px-4 py-2 border">5: bulky</td>
                                <td className="px-4 py-2 border">6.5 – 9.0</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border">Super Bulky</td>
                                <td className="px-4 py-2 border">5-6 wpi</td>
                                <td className="px-4 py-2 border">8-12 stitches</td>
                                <td className="px-4 py-2 border">6: super bulky</td>
                                <td className="px-4 py-2 border">9.0 – 12.0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ),
        },
        // Add more crochet basics as needed
    ];
    const TutorialDetail = ({ tutorials }) => {
        const { id } = useParams();
        const tutorial = tutorials.find(tut => tut.id === id);
      
        return (
          <div>
            {tutorial ? (
              <TutorialDescription title={tutorial.title} pattern={tutorial} />
            ) : (
              <p>Tutorial not found</p>
            )}
          </div>
        );
      };
}

export default TutorialDetail