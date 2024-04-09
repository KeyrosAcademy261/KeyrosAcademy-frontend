import React from 'react'
import { Portrait1, Portrait2, Portrait3, Portrait4 } from '../../asset/index'
import './testimonial.scss'

export default function Testimonial() {
    const avis = [
        { 'id': 1, 'Avis': "J'ai fait beaucoup de choses avant de me lancer dans le trading, j'ai décidé de me lancer dedans pour être rentable financièrement et avoir une liberté de temps pour le futur. Il existe de nombreuses arnaques dans le trading surtout à nos jours, mais j'ai eu la chance de rejoindre Keyros académie.La différence au sein de keyros c’est qu’on risque peu mais gagne beaucoup avec notre stratégie.Le trading n’est pas facile et a besoin beaucoup de temps de discipline et de patience. Mais Après beaucoup d’exercice, de travaille, de suivi par le mentor, maintenant je peux dire que je maitrise les analyses, mes émotions et surtout a une vision claire sur le marché. Ce sont les éléments clés du Trading.", 'portrait': Portrait1, 'name': 'Fitia Rakotoarimanana', 'emplacement': 'Madagascar' },
        {
            'id': 2, 'Avis': "Avant d’adhéré chez Keyros Academy, j’ai suivi plusieurs cours avec plusieurs formateurs. Ces gourous étaient tous les même, des vendeurs de rêve. Quand je cherchais de nouvelle perspective, je suis tombé sur Keyros Academy, une formation qui propose quelques choses de nouveau, quelques choses que je n’ai jamais vus. En premier, une formation plus que complète ainsi que des stratégies que je n’ai pas encore connu au part avant.Puis, le suivi, l’atout majeur des formateurs de la Keyros Academy.S’il y a bien une chose que cette académie priorise, c’est bien le fait d’avoir de bon disciple capable de bien appliquer la stratégie ainsi que de gérer ses traders.Et pour que nous puissions arriver à un tel résultat, rien de tel qu’un bon suivi.",'portrait':Portrait2, 'name': 'Matthieu', 'emplacement':'Madagascar'},
        { 'id': 3, 'Avis': "La formation de trading que j'ai suivie a été une expérience exceptionnelle. Les instructeurs hautement qualifiés m'ont offert un enseignement professionnel et approfondi, renforçant ma compréhension des marchés financiers. Grâce à cette formation, j'ai développé des compétences précieuses, me permettant de prendre des décisions éclairées sur les marchés. Je recommande vivement cette formation à ceux qui recherchent une éducation sérieuse et approfondie dans le domaine du trading financier.", 'portrait': Portrait3, 'name': 'Tahiry Lucien', 'emplacement': 'Madagascar' },
        { 'id': 4, 'Avis': "Pour moi, faire partie de la formation chez 'Keyros academy' m'a fait découvrir les fondamentaux du marché des devises (Forex ). Tout ce que vous devez savoir sur le trading peut être trouvé ici même si vous débutez ou si vous voulez vous remettre dans le droit chemin dans ce domaine. De l'analyse pure des graphiques à la connaissance de la psychologie existante sur les marchés, c'est le meilleur cours pour commencer. Je recommande vivement d'acheter le cours si vous voudriez être un trader rentable", 'portrait': Portrait4, 'name': 'Loic Rakotomalala', 'emplacement': 'Madagascar' }
    ]
    return (
        <div className='containerTestimonial'>
            <div className="titleTestimonial">
                <h2>What Our Students Have To Say</h2>
            </div>
            <div className="AvisSpace">
                {avis.map(function (e) {
                    return (
                        <div className="cardAvis" key={e.id}>
                            <p>{`" ${e.Avis} "`}</p>
                            <div className="student">
                                <div className="details">
                                    <p className="name">{e.name}</p>
                                    <p className="emplacement">From {e.emplacement}</p>
                                </div>

                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
