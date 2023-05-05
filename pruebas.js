AFRAME.registerComponent('gltf-model', {
    schema: {
        src: { type: 'asset' },
        crossorigin: { default: '' }
    },

    init: function () {
        this.loaderModelo = new THREE.GLTFLoader();
        this.model = null;
        this.materials = null;

        // Wait for model to load.
        this.loaderModelo.load(this.data.src, function gltfLoaded(modelo) {
            this.model = modelo.scene || modelo.scenes[0];
            this.el.setObject3D('mesh', this.model);
            this.el.emit('model-loaded', { format: 'gltf', model: this.model });
        }, undefined, function gltfFailed(error) {
            console.error(error);
        });
    }
});
