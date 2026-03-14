class Carga extends Phaser.Scene {

    constructor(){
        super("Carga");
    }
    preload () {

        //Fondo de carga
        this.add.rectangle(
            this.scale.width / 2,
            this.scale.heigth / 2,
            this.scale.width,
            this.scale.heigth,
            0x222222
        );

        // texto
        let texto = this.add.text (
            this.scale.width /2,
            this.scale.heigth / 2 - 50,
            "cargando 0%",
            { fontSize: "30px", color: "#ffffff" }
        ) .setOrigin (0.5);

        //barra fondo
        let barraFondo = this.add.rectangle(
            this.scale.width / 2,
            this.scale.heigth / 2,
            400,
            30,
            0x555555
        );

        //barra progreso
        let barra = this .add.rectangle(
            this.scale.width / 2 -200,
            this.scale.heigth / 2,
            0,
            30,
            0xffff00
        ).setOrigin(0, 0.5);
        
        //archivos a cargar
        this.load.image("light", "light.jpeg");
        this.load.image("misa", "misa.jpeg");
        this.load.image("matsuda", "matsuda.jpeg");
        this.load.image("fondoInicio", "fondo.jpeg"); // Ajusta la ruta y extensión
        this.load.image("fondoJuego", "fondo1.jpg");
 // progreso de carga
        this.load.on("progress", (valor) => {

            let porcentaje = parseInt(valor * 100);

            texto.setText("Cargando " + porcentaje + "%");

            barra.width = 400 * valor;

        });

    }

    create(){

        // esperar un poco antes de cambiar de escena
        this.time.delayedCall(1500, () => {

            this.scene.start("Inicio");

        });
    }
}