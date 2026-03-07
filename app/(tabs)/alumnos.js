import { Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { List, TouchableRipple } from 'react-native-paper';

export default function Alumnos() {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setAlumnos([
                { nombre: 'CANDELARIA MORA SAMANTHA', matricula: '2114354' },
                { nombre: 'AGUILAR ORTIZ LUIS ROLANDO', matricula: '2121179' },
                { nombre: 'BARRIENTOS GALLEGOS DIEGO', matricula: '2048051' },
                { nombre: 'CANO MONTIEL KELLY YISSETH', matricula: '1979822' },
                { nombre: 'CANTU SILVA JAVIER', matricula: '2111889' },
                { nombre: 'CARMONA LOZANO ANGEL EMILIANO', matricula: '2069119' },
                { nombre: 'CASTILLO ACOSTA JORGE', matricula: '2132842' },
                { nombre: 'DAVILA GONZALEZ ALDO ADRIAN', matricula: '1994122' },
                { nombre: 'DURAN BARRIENTOS FABRIZIO', matricula: '2018230' },
                { nombre: 'FLORES GONZALEZ SEBASTIAN', matricula: '2104564' },
                { nombre: 'FLORES LÓPEZ DIEGO', matricula: '2066033' },
                { nombre: 'FLORES MARTINEZ ERICK ADRIAN', matricula: '2132976' },
                { nombre: 'GARZA AVALOS DIEGO', matricula: '2066114' },
                { nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL', matricula: '2031243' },
                { nombre: 'GRANJA PEÑA DIEGO', matricula: '2064733' },
                { nombre: 'IBARRA RODRIGUEZ ALEXIS', matricula: '2094647' },
                { nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN', matricula: '2005102' },
                { nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA', matricula: '2064574' },
                { nombre: 'MIRELES VELAZQUEZ ALEJANDRO', matricula: '2024783' },
                { nombre: 'MONSIVAIS SALAZAR ANDRES', matricula: '2066077' },
                { nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA', matricula: '2092151' },
                { nombre: 'PEÑA MUNGARRO LUIS ANGEL', matricula: '2103708' },
                { nombre: 'PUENTE REYNOSO JULIO CESAR', matricula: '2115192' },
                { nombre: 'RAMIREZ LOPEZ BRYAN', matricula: '2103765' },
                { nombre: 'RAMOS AVILA LILIANA VALERIA', matricula: '2056778' },
                { nombre: 'RICO JAUREGUI MAURICIO', matricula: '2037503' },
                { nombre: 'RIVERA LUNA ADRIAN', matricula: '2131513' },
                { nombre: 'RIVERA REYNA JOSE EMILIO', matricula: '2013503' },
                { nombre: 'RODRIGUEZ OLVERA ROSA ISELA', matricula: '2004613' },
                { nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL', matricula: '2133022' },
                { nombre: 'SANCHEZ GALARZA JUAN CARLOS', matricula: '2026061' },
                { nombre: 'SOLIS ORTIZ ALFREDO', matricula: '2095320' },
                { nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL', matricula: '2025350' },
                { nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL', matricula: '2103895' },
                { nombre: 'ZACATENCO OLIVE RODRIGO', matricula: '1857791' },
                { nombre: 'ZAVALA CANTU TERESA MARGARITA', matricula: '2025218'
                }            
            ]);
        }, 2000);
    }, []);

    if (!alumnos.length) {
        return (
            <List.Item
                title="Cargando lista..."
                left={props => <List.Icon {...props} icon="loading" />}
            />
        );
    }

    if (alumnos.length === 0) {
        return <Text>No hay alumnos disponibles.</Text>;
    }

    return (
        <FlatList
            data={alumnos}
            keyExtractor={(item) => item.matricula.toString()}
            renderItem={({ item }) => (
                <TouchableRipple onPress={() => console.log(item.nombre)}>
                    <List.Item
                        title={item.nombre}
                        description={`Matricula: ${item.matricula}`}
                        left={props => <List.Icon {...props} icon="account" />}
                    />
                </TouchableRipple>
            )}
        />
    );
}