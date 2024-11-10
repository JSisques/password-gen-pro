"use client";

import PasswordGenerator from "@/components/passwordGenerator/PasswordGenerator";
import CustomCard from "@/components/customCard/CustomCard";
import CustomList from "@/components/customList/CustomList";
import { useState } from "react";
export default function Home() {
  const [passwordList, setPasswordList] = useState<{ text: string }[]>([]);

  return (
    <div>
      <CustomCard title="Generador de Contraseñas">
        <PasswordGenerator
          passwordList={passwordList}
          setPasswordList={setPasswordList}
        />
        <CustomList items={passwordList} className="mt-4" />
      </CustomCard>
    </div>
  );
}
