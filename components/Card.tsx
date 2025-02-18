import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";


const Card = () => {

    const [abre, setAbre] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.card}>
            <Pressable
                style={[abre && styles.cardAbierto]}
                onPress={() => setAbre(!abre)}>
                <View style={styles.contieneResumen}>
                    <View>
                        <Text style={[styles.titulo && styles.abierto]}>Resumen monotributo</Text>
                        <Text style={styles.texto}>Actualizado el día 01/01/25</Text>
                    </View>
                    <View>
                        <View style={styles.contieneLetra}>
                            <Text style={styles.letra}>A</Text>
                        </View>
                    </View>
                </View>
            </Pressable>

            <>
                {abre && (
                    <View style={styles.resumenAbierto}>

                        <View>
                            <Text style={styles.tituloDos}>Facturación</Text>
                            <Text style={styles.texto}>Últimos 12 meses</Text>
                        </View>

                        <View style={styles.barra}>
                            <View style={styles.barraMas}>
                                <Text style={styles.porcentaje}>53%</Text>
                            </View>
                        </View>

                        <View style={{ paddingVertical: 20, alignItems: 'center', gap: 10 }}>
                            <View style={styles.contieneLimites}>
                                <View style={{ backgroundColor: '#0047AF', width: 10, height: 10, borderRadius: 50 }}></View>
                                <Text
                                    style={styles.tituloLimite}>
                                    Límite facturación 2025 permitida categoría A</Text>
                                <Text style={styles.limiteDinero}>$ 7.813.063</Text>
                            </View>
                            <View style={styles.contieneLimites}>
                                <View style={{ backgroundColor: '#0DB1E6', width: 10, height: 10, borderRadius: 50 }}></View>
                                <Text style={styles.tituloLimite}>Límite facturación 2025 permitida categoría A</Text>
                                <Text style={styles.limiteDinero}>$ 7.813.063</Text>
                            </View>

                            <View style={{ marginVertical: 10, borderWidth: .2, borderColor: '#515151', width: '100%' }}></View>

                            <View style={styles.contieneLimites}>
                                <View style={{ backgroundColor: 'transparetn', width: 10, height: 10, borderRadius: 50 }}></View>
                                <Text style={styles.tituloLimite}>Saldo para facturar hasta Junio 2025</Text>
                                <Text style={styles.limiteDinero}>$ 3.607.584</Text>
                            </View>
                        </View>

                        <Pressable
                            onPress={() => setModalVisible(true)}
                            style={styles.buttonRecategorizacion}
                        >
                            <Text style={styles.buttonTexto}>¿Qué sucederá en la próxima recategorización?</Text>
                        </Pressable>
                        <>
                            {modalVisible && (
                                <Modal
                                    visible={modalVisible}
                                    transparent={true}
                                    animationType="fade"
                                    onRequestClose={() => { }}
                                >

                                    <View style={{ paddingHorizontal: 20, backgroundColor: '#rgba(30, 30, 30, 0.67)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                        <Pressable
                                            onPress={() => setModalVisible(false)}
                                            style={{ position: 'absolute', bottom: 100, right: 170 }}
                                        >
                                            <Feather name="x" size={24} color="white" />
                                        </Pressable>
                                        <View style={styles.modal}>

                                            <Text style={styles.tituloModal}>Continuarás en tu categoría actual</Text>

                                            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, width: '100%', paddingHorizontal: 50 }}>
                                                    <View style={styles.contieneLetraUno}>
                                                        <Text style={styles.letraUno}>A</Text>
                                                    </View>
                                                    <View>
                                                        <Feather name="arrow-right" size={24} color="#0047AF" />
                                                    </View>
                                                    <View style={styles.contieneLetra}>
                                                        <Text style={styles.letra}>A</Text>
                                                    </View>
                                                </View>

                                                <Text style={{ textAlign: 'center', fontFamily: 'WorkSans', fontSize: 18, marginVertical: 10 }}>Facturación anual permitida</Text>

                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, width: '100%', paddingHorizontal: 30 }}>
                                                    <View style={{ alignItems: 'center' }}>
                                                        <Text style={{ width: '100%' }}>$ 1.000.000</Text>
                                                    </View>

                                                    <View style={{ alignItems: 'center' }}>
                                                        <Text style={{ width: '100%' }}>$ 1.000.000</Text>
                                                    </View>
                                                </View>

                                                <View style={{ marginVertical: 10, borderWidth: .2, borderColor: '#515151', width: '100%' }}></View>

                                                <Text style={{ textAlign: 'center', fontFamily: 'WorkSans', fontSize: 18, marginVertical: 10 }}>Valor de la cuota mensual</Text>

                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, width: '100%', paddingHorizontal: 30 }}>
                                                    <View style={{ alignItems: 'center' }}>
                                                        <Text style={{ width: '100%' }}>$ 10.000</Text>
                                                    </View>

                                                    <View style={{ alignItems: 'center' }}>
                                                        <Text style={{ width: '100%' }}>$ 10.000</Text>
                                                    </View>
                                                </View>

                                                <View>
                                                    <Text style={{ textAlign: 'center', fontSize: 13, marginTop: 15 }}>Tu facturacion actual esta dentro del monto anual correspondiente a la categoria A</Text>
                                                </View>
                                            </View>

                                        </View>
                                    </View>
                                </Modal>
                            )}
                        </>

                        <View style={{ marginVertical: 10, borderWidth: .2, borderColor: '#515151', width: '100%' }}></View>


                        <View style={styles.contieneLimites}>
                            <Text style={styles.tituloLimite}>Solicitar constancia de inscripción</Text>
                            <Feather name="download" size={24} color="#0047AF" />
                        </View>
                    </View>
                )}
            </>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 8,
        marginVertical: 40,

        elevation: 5,
        shadowColor: '#515151',
    },
    contieneResumen: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,

        borderRadius: 8,
    },
    titulo: {
        fontFamily: 'WorkSans',
        fontSize: 18,
        color: '#0047AF',
    },
    texto: {
        fontFamily: 'WorkSans',
        fontSize: 14,
    },
    contieneLetra: {
        backgroundColor: '#0047AF',
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    letra: {
        color: 'white',
        fontSize: 20,
    },
    contieneLimites: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    tituloLimite: {
        fontFamily: 'WorkSans',
        fontSize: 13,
        color: '#1e1e1e',
        width: 180,
    },
    limiteDinero: {
        color: '#1e1e1e',
        fontFamily: 'WorkSans',
        fontSize: 13,
    },




    resumenAbierto: {
        gap: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    cardAbierto: {
        backgroundColor: '#F0F0F3',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    abierto: {
        color: '#0047AF',
        fontFamily: 'WorkSans',
        fontSize: 18,
    },
    tituloDos: {
        fontFamily: 'WorkSans',
        fontSize: 16,
        color: '#1e1e1e',
    },
    barra: {
        backgroundColor: '#0047AF',
        width: '100%',
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
    },
    porcentaje: {
        color: 'white',
        fontFamily: 'WorkSans',
        fontSize: 20,
        paddingHorizontal: 10,
    },
    barraMas: {
        backgroundColor: '#0DB1E6',
        borderRadius: 50,
        height: 40,
        width: '53%',
        justifyContent: 'center',
    },
    buttonRecategorizacion: {
        backgroundColor: '#0047AF',
        borderRadius: 50,
        width: '100%',
    },
    buttonTexto: {
        color: 'white',
        fontFamily: 'WorkSans',
        fontSize: 14,
        textAlign: 'center',
        paddingVertical: 10,
    },

    modal: {
        backgroundColor: 'white',
        padding: 20,
        width: '100%',
        borderRadius: 10,
    },
    tituloModal: {
        fontFamily: 'WorkSans',
        fontSize: 18,
        color: '#0047AF',
        textAlign: 'center',
    },
    contieneLetraUno: {
        backgroundColor: 'white',
        borderColor: '#0047AF',
        borderWidth: 1,
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    letraUno: {
        color: '#0047AF',
        fontSize: 20,
    },
});


export default Card;