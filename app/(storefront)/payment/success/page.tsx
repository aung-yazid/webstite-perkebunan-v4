import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

export default function SuccessRoute() {
    const telp = process.env.NEXT_PUBLIC_TELP;

    const namaPenerima = "[Nama Lengkap Penerima]";
    const namaJalan = "[Nama Jalan]";
    const RT = "[RT / RW]";
    const dusun = "[Dusun/Desa/Kelurahan]"
    const kecamatan = "[Kecamatan]"
    const kabupaten = "[Kabupaten/Kota]"
    const provinsi = "[Provinsi]"
    const kodePos = "[Kode Pos]"
    const noTelp = "[Nomor Telepon yang dapat dihubungi]"

    const pesan = `Nama Penerima: ${namaPenerima} \nAlamat Lengkap: ${namaJalan} \nRT/RW: ${RT} \nDusun/Kecamatan/Kelurahan: ${dusun} \nKecamatan: ${kecamatan} \nKabupaten: ${kabupaten} \nProvinsi: ${provinsi} \nKode Pos: ${kodePos} \nNomor Telepon: ${noTelp}`

    const encodePesan = encodeURIComponent(pesan)
    const link = `https://wa.me/${telp}?text=${encodePesan}`;

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center">
      <Card className="w-[350px]">
        <div className="p-6">
          <div className="w-full flex justify-center">
            <Check className="w-12 h-12 rounded-full bg-green-500/30 text-green-500 p-2" />
          </div>

          <div className="mt-3 text-center sm:mt-5 w-full">
            <h3 className="text-lg leading-6 font-medium">
              Pembayaran Berhasil
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
            Selamat atas pembelian kamu. Pembayaran kamu berhasil. Hubungi Whatsapp Berikut untuk Alamat Pengiriman.
            </p>

            <Button asChild className="w-full mt-5 sm:mt-6">
              <Link href={link}>Hubungi Whatsapp</Link>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}