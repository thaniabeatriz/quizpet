class QuizController {
    static async quizPet(req,res){
        const { quiz,animal } = req.body;

        let racas;

        if(animal == 'gato'){
            racas = {
                siames: ['Ásia', 'Pequeno', 'Carinhoso', 'Guloso', 'Curto', '12-16 anos', 'Alto', 'Pelo curto e denso'],
                persa: ['Irã', 'Médio', 'Calmo', 'Guloso', 'Longo', '10-15 anos', 'Médio', 'Pelo longo e sedoso'],
                maine_coon: ['Estados Unidos', 'Grande', 'Amigável', 'Moderado', 'Longo', '10-13 anos', 'Alto', 'Pelo longo e denso'],
                ragdoll: ['Estados Unidos', 'Médio', 'Dócil', 'Moderado', 'Longo', '12-17 anos', 'Médio', 'Pelo longo e sedoso'],
                sphynx: ['Canadá', 'Médio', 'Afetuoso', 'Moderado', 'Sem pelo', '8-14 anos', 'Alto', 'Sem pelo'],
                bengal: ['Índia', 'Médio', 'Ativo', 'Moderado', 'Curto', '10-15 anos', 'Alto', 'Pelo curto e macio'],
                british_shorthair: ['Reino Unido', 'Médio', 'Independente', 'Moderado', 'Curto', '12-20 anos', 'Baixo', 'Pelo curto e denso'],
                munchkin: ['Estados Unidos', 'Pequeno', 'Brincalhão', 'Moderado', 'Curto', '12-15 anos', 'Médio', 'Pelo curto e macio']
            };
        }else{
            racas = {
                labrador:['África', 'Grande', 'Carinhoso', 'Guloso', 'Curto', '12-14 anos', 'Alto', 'Pelagem densa e curta'],
                vira_lata: ['Brasil', 'Médio', 'Brincalhão', 'Atencioso', 'Variado', '12-15 anos', 'Médio', 'Varia de acordo com a mistura'],
                chow_chow: ['Ásia', 'Médio', 'Calmo', 'Guloso', 'Longo', '9-15 anos', 'Médio', 'Pelo longo e denso'],
                bulldog: ['Inglaterra', 'Pequeno', 'Teimoso', 'Guloso', 'Curto', '8-12 anos', 'Baixo', 'Pelo curto e liso'],
                poodle: ['França', 'Pequeno', 'Inteligente', 'Guloso', 'Crespo', '10-18 anos', 'Alto', 'Pelo encaracolado e denso'],
                husky_siberiano: ['Sibéria', 'Grande', 'Energético', 'Guloso', 'Longo', '12-15 anos', 'Alto', 'Pelo denso e duplo'],
                golden_retriever: ['Escócia', 'Grande', 'Amigável', 'Guloso', 'Longo', '10-12 anos', 'Alto', 'Pelo longo e dourado'],
                beagle: ['Inglaterra', 'Pequeno', 'Curioso', 'Guloso', 'Curto', '12-15 anos', 'Médio', 'Pelo curto e resistente']
            };            
        }

        let suaRaca = null;
        let maxCaracteristicas = 0;

        Object.keys(racas).forEach((raca) => {
            const caracteristicasRaca = racas[raca];
            let caracteristicasIguais = 0;

            quiz.forEach((caracteristicaQuiz => {
                if(caracteristicasRaca.includes(caracteristicaQuiz)) {
                    caracteristicasIguais++;
                }
            }));

            if(caracteristicasIguais > maxCaracteristicas){
                suaRaca = raca;
                maxCaracteristicas = caracteristicasIguais;
            }
        });

        res.json({suaRaca,maxCaracteristicas});
    }
}

module.exports =  {QuizController} ;
