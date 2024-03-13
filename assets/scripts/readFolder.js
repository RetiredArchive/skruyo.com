const readDirectory = (directoryPath, callback) => {
    $.ajax({
        url: "../assets/scripts/readFolder.php",
        type: "GET",
        dataType: "json",
        data: { folderPath: directoryPath },
        success: (files) => callback(null, files),
        error: (error) => callback(error, null)
    });
}
