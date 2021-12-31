import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native"; 


 
const BasicJavascript = () =>{
    // //variable
    // 1 jeruk + 1 jeruk = 2 jeruk1 
    // 1j + 1j = 2j
 
    //Type data primitif;
    const nama = "Egih Sugiatna"; //sting
    let usia = 35; //number
    const apakahLakilaki = true; //boolean

    //Type data complex - Objek; 
    const hewanPeliharaan = {
        nama:"Miaw",
        jenis:"Kusing",
        usia:2,
        apakahHewanLokal:true,
        warna:"kuning",
        orangTua:{
            jantan:"Kaisar",
            betina:"Kuin"
        }
    }

    //Type data complex - function;
    const sapaOrang = (name,age) => {
        return console.log("Hello ${name, usia anda ${age}");
    }
    sapaOrang("Egih Sugiatna",35);

    //Type data complex - objek - array;
    const namaOrang = ["Egih","Atika","Syafiq","Aisha"];

    typeof namaOrang; //objek

    // //Logika
    // if(hewanPeliharaan.nama==="Miaw"){
    //     console.log("Hallo Miaw");
    // }else{
    //     console.log("Hewan siapa ini?"); 
    // }

    const sapaHewan = objekHewan =>{
        // let hasilSapa = "";
            
        // if(objekHewan.nama==="Miaw"){
        //     hasilSapa = "Hallo Miaw";
        // }else{
        //     hasilSapa = "Hewan siapa ini?"; 
        // }
        // return hasilSapa;
        return objekHewan.nama==="Miaw" ? "Hallo Miaw" : "Hewan siapa ini?"; //ternary operator
    }



    return (
        <View style={styles.conainer}>
            <Text tyle={styles.textTitle}>Materi Basic Javascript</Text> 

            <Text>Nama: {nama}</Text>
            <Text>Age: {usia}</Text>
            <Text>{sapaHewan(hewanPeliharaan)}</Text>

            <Text>{namaOrang[0]}</Text>
            <Text>{namaOrang[1]}</Text>
            <Text>{namaOrang[2]}</Text>
            <Text>{namaOrang[3]}</Text>
            <Text>{namaOrang}</Text> 

            {/* pake loop => map */}
            <Text>======map-function========</Text> 
            {namaOrang.map(function(item,index) {
               return <Text>{index+1}: {item}</Text> 
            })}    
          {/*   <Text>======map-()========</Text> 
            {namaOrang.map(orang => {
               return <Text>{orang}</Text>
            })}   */}
        </View>
    );
}

export default BasicJavascript;
const styles = StyleSheet.create({
    container : {padding:20},
    textTitle : {textAlign: 'center'}
});
