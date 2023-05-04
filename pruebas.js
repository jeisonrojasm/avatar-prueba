function animate() {
    requestAnimationFrame(animate);

    // Actualizar el objeto Mixer con el tiempo transcurrido
    mixer.update(clock.getDelta());

    renderer.render(scene, camera);

    // Crear el exportador y generar el archivo GLB
    var exporter = new THREE.GLTFExporter();
    exporter.parse(scene, function (glb) {
        var blob = new Blob([glb], { type: 'application/octet-stream' });
        var url = URL.createObjectURL(blob);

        // Crear un enlace para descargar el archivo
        var link = document.createElement('a');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.href = url;
        link.download = 'nuevo-modelo.glb';
        link.click();

        // Liberar los recursos
        URL.revokeObjectURL(url);
        document.body.removeChild(link);
    }, {});
}